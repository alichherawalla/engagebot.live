import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { X, Save, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { insertBlogPostSchema, updateBlogPostSchema, type BlogPost, type InsertBlogPost, type UpdateBlogPost } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

interface BlogEditorProps {
  isOpen: boolean;
  post?: BlogPost | null;
  onClose: () => void;
}

export default function BlogEditor({ isOpen, post, onClose }: BlogEditorProps) {
  const { toast } = useToast();
  const [isPreview, setIsPreview] = useState(false);
  const isEditing = !!post;

  const form = useForm<InsertBlogPost | UpdateBlogPost>({
    resolver: zodResolver(isEditing ? updateBlogPostSchema : insertBlogPostSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      excerpt: "",
      category: "",
      author: "",
      imageUrl: "",
      published: false,
    },
  });

  useEffect(() => {
    if (post) {
      form.reset({
        title: post.title,
        slug: post.slug,
        content: post.content,
        excerpt: post.excerpt,
        category: post.category,
        author: post.author,
        imageUrl: post.imageUrl || "",
        published: post.published || false,
      });
    } else {
      form.reset({
        title: "",
        slug: "",
        content: "",
        excerpt: "",
        category: "",
        author: "",
        imageUrl: "",
        published: false,
      });
    }
  }, [post, form]);

  const createPostMutation = useMutation({
    mutationFn: async (data: InsertBlogPost) => {
      const response = await fetch("/api/blog/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Post Created!",
        description: "Your blog post has been created successfully.",
      });
      onClose();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create blog post. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updatePostMutation = useMutation({
    mutationFn: async (data: UpdateBlogPost) => {
      const response = await fetch(`/api/blog/posts/${post!.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to update blog post");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Post Updated!",
        description: "Your blog post has been updated successfully.",
      });
      onClose();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update blog post. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertBlogPost | UpdateBlogPost) => {
    // Generate slug from title if not provided
    if (!data.slug && 'title' in data && data.title) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    if (isEditing) {
      updatePostMutation.mutate(data as UpdateBlogPost);
    } else {
      createPostMutation.mutate(data as InsertBlogPost);
    }
  };

  const handleTitleChange = (title: string) => {
    form.setValue('title', title);
    // Auto-generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    form.setValue('slug', slug);
  };

  if (!isOpen) return null;

  const watchedContent = form.watch('content');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-testid="blog-editor-modal">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900" data-testid="editor-title">
            {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPreview(!isPreview)}
              data-testid="toggle-preview"
            >
              <Eye className="h-4 w-4 mr-2" />
              {isPreview ? "Edit" : "Preview"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              data-testid="editor-close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {isPreview ? (
            <div className="p-6" data-testid="preview-content">
              <div className="max-w-none prose prose-lg">
                <h1>{form.watch('title')}</h1>
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: (watchedContent || '').replace(/\n/g, '<br>') 
                  }} 
                />
              </div>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6" data-testid="blog-editor-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      {...form.register("title")}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Enter blog post title"
                      data-testid="input-title"
                    />
                    {form.formState.errors.title && (
                      <p className="text-red-600 text-sm mt-1">{form.formState.errors.title.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="slug">URL Slug *</Label>
                    <Input
                      id="slug"
                      {...form.register("slug")}
                      placeholder="url-friendly-slug"
                      data-testid="input-slug"
                    />
                    {form.formState.errors.slug && (
                      <p className="text-red-600 text-sm mt-1">{form.formState.errors.slug.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Input
                      id="category"
                      {...form.register("category")}
                      placeholder="e.g., AI Automation, Best Practices"
                      data-testid="input-category"
                    />
                    {form.formState.errors.category && (
                      <p className="text-red-600 text-sm mt-1">{form.formState.errors.category.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="author">Author *</Label>
                    <Input
                      id="author"
                      {...form.register("author")}
                      placeholder="Author name"
                      data-testid="input-author"
                    />
                    {form.formState.errors.author && (
                      <p className="text-red-600 text-sm mt-1">{form.formState.errors.author.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="imageUrl">Featured Image URL</Label>
                    <Input
                      id="imageUrl"
                      {...form.register("imageUrl")}
                      placeholder="https://example.com/image.jpg"
                      data-testid="input-image-url"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="published"
                      checked={!!form.watch('published')}
                      onCheckedChange={(checked) => form.setValue('published', checked)}
                      data-testid="switch-published"
                    />
                    <Label htmlFor="published">Publish immediately</Label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      {...form.register("excerpt")}
                      placeholder="Brief description of the blog post..."
                      className="min-h-[120px]"
                      data-testid="textarea-excerpt"
                    />
                    {form.formState.errors.excerpt && (
                      <p className="text-red-600 text-sm mt-1">{form.formState.errors.excerpt.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  {...form.register("content")}
                  placeholder="Write your blog post content here..."
                  className="min-h-[300px] font-mono text-sm"
                  data-testid="textarea-content"
                />
                {form.formState.errors.content && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.content.message}</p>
                )}
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  data-testid="button-cancel"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createPostMutation.isPending || updatePostMutation.isPending}
                  className="flex-1 bg-brand-blue hover:bg-brand-blue-light text-white"
                  data-testid="button-save"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {createPostMutation.isPending || updatePostMutation.isPending 
                    ? "Saving..." 
                    : isEditing ? "Update Post" : "Create Post"
                  }
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
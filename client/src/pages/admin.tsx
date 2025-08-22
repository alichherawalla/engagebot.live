import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye, Calendar, User, Tag } from "lucide-react";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlogEditor from "@/components/blog-editor";
import { useToast } from "@/hooks/use-toast";
import type { BlogPost } from "@shared/schema";

export default function Admin() {
  const { toast } = useToast();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const { data: posts, isLoading, refetch } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/posts/all'],
  });

  const deletePostMutation = useMutation({
    mutationFn: async (postId: string) => {
      const response = await fetch(`/api/blog/posts/${postId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete blog post");
      }
    },
    onSuccess: () => {
      toast({
        title: "Post Deleted",
        description: "Blog post has been deleted successfully.",
      });
      refetch();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete blog post. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleCreateNew = () => {
    setEditingPost(null);
    setIsEditorOpen(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsEditorOpen(true);
  };

  const handleEditorClose = () => {
    setIsEditorOpen(false);
    setEditingPost(null);
    refetch();
  };

  const handleDelete = (post: BlogPost) => {
    if (confirm(`Are you sure you want to delete "${post.title}"?`)) {
      deletePostMutation.mutate(post.id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Blog CMS - EngageBot Admin"
        description="Content management system for EngageBot blog posts"
        canonical="/admin"
      />
      
      <Navbar />
      
      <main className="py-20" data-testid="admin-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2" data-testid="admin-title">
                Blog CMS
              </h1>
              <p className="text-slate-600" data-testid="admin-description">
                Manage your blog posts and content
              </p>
            </div>
            <Button 
              onClick={handleCreateNew}
              className="bg-brand-blue hover:bg-brand-blue-light text-white"
              data-testid="create-post-button"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </motion.div>

          {isLoading ? (
            <div className="grid gap-6" data-testid="admin-loading">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                  <div className="h-6 bg-slate-200 rounded mb-4"></div>
                  <div className="h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid gap-6" data-testid="posts-list">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-testid={`post-item-${index}`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-slate-900" data-testid={`post-title-${index}`}>
                            {post.title}
                          </h3>
                          <Badge 
                            variant={post.published ? "default" : "secondary"}
                            data-testid={`post-status-${index}`}
                          >
                            {post.published ? "Published" : "Draft"}
                          </Badge>
                        </div>
                        <p className="text-slate-600 mb-3 line-clamp-2" data-testid={`post-excerpt-${index}`}>
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <div className="flex items-center" data-testid={`post-category-${index}`}>
                            <Tag className="h-4 w-4 mr-1" />
                            {post.category}
                          </div>
                          <div className="flex items-center" data-testid={`post-author-${index}`}>
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center" data-testid={`post-date-${index}`}>
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'No date'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        {post.published && (
                          <Link href={`/blog/${post.slug}`}>
                            <Button 
                              variant="outline" 
                              size="sm"
                              data-testid={`post-view-${index}`}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEdit(post)}
                          data-testid={`post-edit-${index}`}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDelete(post)}
                          disabled={deletePostMutation.isPending}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          data-testid={`post-delete-${index}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md" data-testid="no-posts">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No blog posts yet</h3>
              <p className="text-slate-600 mb-6">Create your first blog post to get started</p>
              <Button 
                onClick={handleCreateNew}
                className="bg-brand-blue hover:bg-brand-blue-light text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create First Post
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      <BlogEditor 
        isOpen={isEditorOpen}
        post={editingPost}
        onClose={handleEditorClose}
      />
    </div>
  );
}
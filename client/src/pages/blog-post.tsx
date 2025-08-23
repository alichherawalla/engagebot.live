import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { marked } from "marked";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@shared/schema";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog/posts/slug', params.slug],
  });

  const { data: relatedPosts } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/posts'],
  });

  const related = relatedPosts?.filter(p => p.slug !== params.slug && p.category === post?.category).slice(0, 3) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="py-20" data-testid="blog-post-loading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-200 rounded mb-4"></div>
              <div className="h-12 bg-slate-200 rounded mb-6"></div>
              <div className="h-4 bg-slate-200 rounded mb-8"></div>
              <div className="h-64 bg-slate-200 rounded mb-8"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-4 bg-slate-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="py-20" data-testid="blog-post-error">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title={`${post.title} | EngageBot Blog`}
        description={post.excerpt}
        keywords={`${post.category}, Twitter automation, AI engagement, ${post.title.toLowerCase()}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogType="article"
        canonical={`/blog/${post.slug}`}
      />
      
      <Navbar />
      
  <main className="pt-14 md:pt-20 pb-12 md:pb-20" data-testid="blog-post-page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-blue hover:text-brand-blue-light mb-4 sm:mb-6 md:mb-8 transition-colors"
              data-testid="blog-post-back-link"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <article className="bg-white rounded-2xl shadow-lg overflow-hidden" data-testid="blog-post-article">
              {post.imageUrl && (
                <div className="relative w-full h-48 sm:h-56 md:h-80 bg-slate-100">
                  {/* Blurred backdrop using the same image */}
                  <img
                    src={post.imageUrl}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40 transform-gpu"
                    data-testid="blog-post-hero-image-bg"
                    loading="lazy"
                  />
                  {/* Subtle vignette to improve contrast */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40" />
                  {/* Foreground image */}
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="relative z-10 w-full h-full object-contain"
                    data-testid="blog-post-hero-image"
                    loading="eager"
                  />
                </div>
              )}
              
              <div className="p-6 sm:p-8 md:p-12">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center" data-testid="blog-post-category">
                    <Tag className="h-4 w-4 mr-2" />
                    <Badge 
                      variant="secondary" 
                      className="bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 text-sm px-3 py-1 font-medium"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <div className="flex items-center" data-testid="blog-post-date">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'No date'}
                    </span>
                  </div>
                  <div className="flex items-center" data-testid="blog-post-author">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight" data-testid="blog-post-title">
                  {post.title}
                </h1>

                <div 
                  className="prose md:prose-lg max-w-none text-slate-700 leading-relaxed prose-headings:text-slate-900 prose-a:text-brand-blue prose-strong:text-slate-900 prose-img:rounded-xl prose-img:shadow"
                  dangerouslySetInnerHTML={{ __html: marked(post.content) }}
                  data-testid="blog-post-content"
                />
              </div>
            </article>
          </motion.div>

          {related.length > 0 && (
            <motion.section
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              data-testid="blog-post-related"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((relatedPost, index) => (
                  <article
                    key={relatedPost.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    data-testid={`related-post-${index}`}
                  >
                    {relatedPost.imageUrl && (
                      <img
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover"
                        data-testid={`related-post-image-${index}`}
                      />
                    )}
                    <div className="p-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 text-xs px-2 py-1 font-medium mb-2"
                        data-testid={`related-post-category-${index}`}
                      >
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold text-slate-900 mt-1 mb-2 line-clamp-2" data-testid={`related-post-title-${index}`}>
                        {relatedPost.title}
                      </h3>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="text-brand-blue hover:text-brand-blue-light text-sm font-medium"
                        data-testid={`related-post-link-${index}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

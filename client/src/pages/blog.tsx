import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/posts'],
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EngageBot Blog - Twitter Automation Tips & AI Engagement Strategies"
        description="Discover expert tips, strategies, and insights for mastering Twitter engagement with AI automation. Learn how successful entrepreneurs scale their social media presence."
        keywords="Twitter automation blog, AI engagement tips, social media strategy, Twitter growth guide, automated responses best practices"
        canonical="/blog"
      />
      
      <Navbar />
      
      <main className="py-20" data-testid="blog-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" data-testid="blog-page-title">
              EngageBot <span className="text-brand-purple">Blog</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="blog-page-description">
              Expert insights, strategies, and tips for mastering Twitter engagement with AI automation.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="blog-loading">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                  <div className="w-full h-48 bg-slate-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-6 bg-slate-200 rounded mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded mb-4"></div>
                    <div className="flex justify-between">
                      <div className="h-4 w-20 bg-slate-200 rounded"></div>
                      <div className="h-4 w-16 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12" data-testid="blog-error">
              <p className="text-red-600 mb-4">Failed to load blog posts. Please try again later.</p>
              <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="blog-posts">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-testid={`blog-post-card-${index}`}
                >
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      data-testid={`blog-post-card-image-${index}`}
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-brand-blue font-medium" data-testid={`blog-post-card-category-${index}`}>
                        {post.category}
                      </span>
                      <span className="text-sm text-slate-500" data-testid={`blog-post-card-date-${index}`}>
                        {post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        }) : 'No date'}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2" data-testid={`blog-post-card-title-${index}`}>
                      {post.title}
                    </h2>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3" data-testid={`blog-post-card-excerpt-${index}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500" data-testid={`blog-post-card-author-${index}`}>
                        By {post.author}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-brand-blue hover:text-brand-blue-light font-medium text-sm"
                        data-testid={`blog-post-card-link-${index}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-testid="blog-empty">
              <p className="text-slate-600 mb-4">No blog posts available at the moment.</p>
              <p className="text-slate-500">Check back soon for the latest insights on Twitter automation!</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

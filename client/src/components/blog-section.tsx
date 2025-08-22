import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import logoPath from "@assets/engagebot-logo-circular.png";

export default function BlogSection() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/posts'],
  });

  const displayPosts = posts?.slice(0, 3) || [];

  return (
    <section id="blog" className="py-20 bg-slate-50" data-testid="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" data-testid="blog-title">
              Latest from the
            </h2>
            <img 
              src={logoPath} 
              alt="EngageBot Logo" 
              className="h-20 w-20 rounded-full object-cover"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Blog
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="blog-description">
            Tips, strategies, and insights for mastering Twitter engagement and AI automation.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse" data-testid={`blog-skeleton-${i}`}>
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
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`blog-post-${index}`}
              >
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    data-testid={`blog-post-image-${index}`}
                  />
                )}
                <div className="p-6">
                  <div className="text-sm text-brand-blue font-medium mb-2" data-testid={`blog-post-category-${index}`}>
                    {post.category}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2" data-testid={`blog-post-title-${index}`}>
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3" data-testid={`blog-post-excerpt-${index}`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500" data-testid={`blog-post-date-${index}`}>
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      }) : 'No date'}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-brand-blue hover:text-brand-blue-light font-medium text-sm"
                      data-testid={`blog-post-link-${index}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/blog">
            <Button className="bg-brand-blue hover:bg-brand-blue-light text-white px-8 py-3 font-semibold" data-testid="blog-view-all">
              View All Posts
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

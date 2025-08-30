import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import logoPath from "@assets/engagebot-logo-circular.png";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  imageUrl?: string | null;
  author?: string | null;
  createdAt?: string | null;
};

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch('/api/blog/posts', { signal: ac.signal });
        if (!res.ok) throw new Error('Failed to fetch posts');
        const all = (await res.json()) as BlogPost[];
        setPosts(all.slice(0, 3));
      } catch (_e) {
        // keep posts null on error
      } finally {
        setLoading(false);
      }
    })();
    return () => ac.abort();
  }, []);

  return (
    <section id="blog" className="py-20 bg-slate-50" data-testid="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
  </div>

  {loading ? (
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
            {(posts || []).map((post: BlogPost, index: number) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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
      </article>
            ))}
          </div>
        )}

    <div className="text-center">
          <Link href="/blog">
            <Button className="bg-brand-blue hover:bg-brand-blue-light text-white px-8 py-3 font-semibold" data-testid="blog-view-all">
              View All Posts
            </Button>
          </Link>
    </div>
      </div>
    </section>
  );
}

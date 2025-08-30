import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
// Removed framer-motion to keep blog chunk lighter
import { useState, useEffect, useMemo } from "react";
import SEOHead from "@/components/seo-head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import type { BlogPost } from "@shared/schema";
import "./blog.css";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch categories
  const { data: categories } = useQuery<string[]>({
    queryKey: ['/api/blog/categories'],
  });

  // Fetch posts based on search and filter
  const { data: posts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog/posts/search', debouncedQuery, selectedCategory === "all" ? undefined : selectedCategory],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (debouncedQuery) params.append('q', debouncedQuery);
      if (selectedCategory !== "all") params.append('category', selectedCategory);
      
      const response = await fetch(`/api/blog/posts/search?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return response.json();
    },
    enabled: true,
  });

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "all";

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EngageBot Blog - Twitter Automation Tips & AI Engagement Strategies"
  description="Discover expert tips, strategies, and insights for mastering Twitter engagement with AI-drafted replies you post manually. Learn how successful entrepreneurs scale their presence without losing authenticity."
  keywords="Twitter automation blog, AI engagement tips, Twitter reply drafts, social media strategy, Twitter growth guide"
        canonical="/blog"
      />
      
      <Navbar />
      
  <main className="py-20 blogList" data-testid="blog-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6" data-testid="blog-page-title">
              EngageBot <span className="text-brand-purple">Blog</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8" data-testid="blog-page-description">
              Expert insights, strategies, and tips for mastering Twitter engagement with AI automation.
            </p>

            {/* Search and Filter Section */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 bg-white border-slate-200 focus:border-brand-blue focus:ring-brand-blue"
                    data-testid="blog-search-input"
                  />
                </div>
                <div className="relative sm:min-w-[200px]">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none z-10" />
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="pl-10 h-12 bg-white border-slate-200 focus:border-brand-blue focus:ring-brand-blue" data-testid="blog-category-filter">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories?.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {hasActiveFilters && (
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleClearFilters}
                    className="text-slate-600 hover:text-slate-900"
                    data-testid="blog-clear-filters"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>

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
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        variant="secondary" 
                        className="bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 text-xs px-3 py-1 font-medium"
                        data-testid={`blog-post-card-category-${index}`}
                      >
                        {post.category}
                      </Badge>
                      <span className="text-sm text-slate-500" data-testid={`blog-post-card-date-${index}`}>
                        {post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        }) : 'No date'}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold card-title mb-3 line-clamp-2" data-testid={`blog-post-card-title-${index}`}>
                      {post.title}
                    </h2>
                    <p className="text-sm card-excerpt mb-4 line-clamp-3" data-testid={`blog-post-card-excerpt-${index}`}>
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
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-testid="blog-empty">
              {hasActiveFilters ? (
                <>
                  <p className="text-slate-600 mb-4">
                    No blog posts found matching your search{selectedCategory !== "all" && ` in "${selectedCategory}"`}.
                  </p>
                  <p className="text-slate-500 mb-4">Try adjusting your search terms or filters.</p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    data-testid="blog-empty-clear-filters"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All Filters
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-slate-600 mb-4">No blog posts available at the moment.</p>
                  <p className="text-slate-500">Check back soon for the latest insights on Twitter automation!</p>
                </>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

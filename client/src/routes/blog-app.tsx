import { lazy, Suspense } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Route, Switch } from "wouter";

const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));

export default function BlogApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
        </Switch>
      </Suspense>
    </QueryClientProvider>
  );
}

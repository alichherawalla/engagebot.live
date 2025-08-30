import { Switch, Route, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
const NotFound = lazy(() => import("@/pages/not-found"));
const Landing = lazy(() => import("@/pages/landing"));
const BlogApp = lazy(() => import("@/routes/blog-app"));
const VsBuffer = lazy(() => import("@/pages/vs-buffer"));
const VsPlannable = lazy(() => import("@/pages/vs-plannable"));
const VsSproutSocial = lazy(() => import("@/pages/vs-sproutsocial"));
const VsHypefury = lazy(() => import("@/pages/vs-hypefury"));
const CaseStudies = lazy(() => import("@/pages/case-studies"));
const CaseStudy = lazy(() => import("@/pages/case-study"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
  <Route path="/" component={Landing} />
  <Route path="/blog" component={BlogApp} />
  <Route path="/blog/:slug" component={BlogApp} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/:slug" component={CaseStudy} />
        <Route path="/vs-buffer" component={VsBuffer} />
        <Route path="/vs-plannable" component={VsPlannable} />
        <Route path="/vs-sproutsocial" component={VsSproutSocial} />
        <Route path="/vs-hypefury" component={VsHypefury} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <ScrollToTop />
      <Router />
    </TooltipProvider>
  );
}

export default App;

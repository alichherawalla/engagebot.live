import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Admin from "@/pages/admin";
import TrialRequests from "@/pages/trial-requests";
import VsBuffer from "@/pages/vs-buffer";
import VsPlannable from "@/pages/vs-plannable";
import VsSproutSocial from "@/pages/vs-sproutsocial";
import VsHypefury from "@/pages/vs-hypefury";
import CaseStudies from "@/pages/case-studies";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/vs-buffer" component={VsBuffer} />
      <Route path="/vs-plannable" component={VsPlannable} />
      <Route path="/vs-sproutsocial" component={VsSproutSocial} />
      <Route path="/vs-hypefury" component={VsHypefury} />
      <Route path="/admin" component={Admin} />
      <Route path="/trial-requests" component={TrialRequests} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

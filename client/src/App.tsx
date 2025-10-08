import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CommitteeSelection from "@/pages/CommitteeSelection";
import Landing from "@/pages/Landing";
import HostSetup from "@/pages/HostSetup";
import HostRoom from "@/pages/HostRoom";
import DelegateSetup from "@/pages/DelegateSetup";
import DelegateRoom from "@/pages/DelegateRoom";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={CommitteeSelection} />
      <Route path="/committee/:committeeId" component={Landing} />
      <Route path="/committee/:committeeId/host" component={HostSetup} />
      <Route path="/committee/:committeeId/host/:roomCode" component={HostRoom} />
      <Route path="/committee/:committeeId/delegate" component={DelegateSetup} />
      <Route path="/committee/:committeeId/room/:roomCode" component={DelegateRoom} />
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

import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Intro from "./pages/Intro";
const Index = lazy(() => import("./pages/Index"));
import About from "./pages/About";
import SolGods from "./pages/SolGods";
import Dao from "./pages/Dao";
import Token from "./pages/Token";
import Partnerships from "./pages/Partnerships";

import SolCity from "./pages/SolCity";
import MintSolCity from "./pages/MintSolCity";
import Team from "./pages/Team";
import Join from "./pages/Join";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/solgods" element={<SolGods />} />
            <Route path="/dao" element={<Dao />} />
            <Route path="/token" element={<Token />} />
            <Route path="/partnerships" element={<Partnerships />} />
            
            <Route path="/solcity" element={<SolCity />} />
            <Route path="/mint-solcity" element={<MintSolCity />} />
            <Route path="/team" element={<Team />} />
            <Route path="/join" element={<Join />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

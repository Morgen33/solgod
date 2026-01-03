import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Dao from "./pages/Dao";
import Token from "./pages/Token";
import Partnerships from "./pages/Partnerships";
import Spaces from "./pages/Spaces";
import Whitepaper from "./pages/Whitepaper";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/dao" element={<Dao />} />
          <Route path="/token" element={<Token />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

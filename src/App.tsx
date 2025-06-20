import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import Index from "./pages/Index";
import Collection from "./pages/Collection";
import YachtType from "./pages/YachtType";
import YachtModel from "./pages/YachtModel";
import ShipyardPage from "./pages/ShipyardPage";
import NotFound from "./pages/NotFound";
import About from './pages/About';
import Contact from './pages/Contact';
import Rental from './pages/Rental';
import Montenegro from './pages/Montenegro';
import Croatia from './pages/Croatia';
import Greece from './pages/Greece';
import Albania from './pages/Albania';
import YachtDetail from './pages/YachtDetail';
// Comment out these imports for now until these pages are created
// import Services from './pages/Services';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="app-container">
        <Toaster />
        <Sonner />
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:typeId" element={<YachtType />} />
            <Route path="/model/:modelId" element={<YachtModel />} />
            <Route path="/shipyard/:shipyardId" element={<ShipyardPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/rental/montenegro" element={<Montenegro />} />
            <Route path="/rental/croatia" element={<Croatia />} />
            <Route path="/rental/greece" element={<Greece />} />
            <Route path="/rental/albania" element={<Albania />} />
            <Route path="/yacht/:yachtId" element={<YachtDetail />} />
            {/* Comment out these routes until the pages are created
            <Route path="/services" element={<Services />} />
            */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BackToTopButton />
        </Router>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


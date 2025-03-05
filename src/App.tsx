
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RealEstateProvider } from "./context/RealEstateContext";
import TopLoadingBar from "./components/TopLoadingBar";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import BuyProperties from "./pages/BuyProperties";
import RentProperties from "./pages/RentProperties";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ListingDetails from "./pages/ListingDetails";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import Branches from "./pages/Branches";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Terms from "./pages/Terms";
import Search from "./pages/Search";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RealEstateProvider>
          <TopLoadingBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/buy" element={<BuyProperties />} />
            <Route path="/properties/rent" element={<RentProperties />} />
            <Route path="/properties/:id" element={<ListingDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/search" element={<Search />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RealEstateProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Courses from "./pages/Courses";
import UndergraduateCourses from "./pages/UndergraduateCourses";
import PostgraduateCourses from "./pages/PostgraduateCourses";
import StudyAbroad from "./pages/StudyAbroad";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notice from "./pages/Notice";
import Career from "./pages/Career";
import CollegeDetails from "./pages/CollegeDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/ug" element={<UndergraduateCourses />} />
          <Route path="/courses/ug/:courseType" element={<CollegeDetails />} />
          <Route path="/courses/pg" element={<PostgraduateCourses />} />
          <Route path="/courses/pg/:courseType" element={<CollegeDetails />} />
          <Route path="/courses/study-abroad" element={<StudyAbroad />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
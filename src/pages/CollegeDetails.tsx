import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollegeList from "@/components/CollegeList";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { courseType } = useParams();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-teal-800 mb-12 text-center">
            {courseType?.toUpperCase()} Colleges
          </h1>
          <CollegeList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollegeDetails;
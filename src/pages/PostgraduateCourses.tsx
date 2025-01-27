import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PostgraduateCourses = () => {
  const pgCourses = [
    { name: "MBA/PGDM", path: "/courses/pg/mba" },
    { name: "MD/MS", path: "/courses/pg/md-ms" },
    { name: "MDS", path: "/courses/pg/mds" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-teal-800 mb-4 text-center">
          Postgraduate Courses
        </h1>
        <p className="text-teal-600 text-center mb-12 max-w-2xl mx-auto">
          Advance your career with our specialized postgraduate programs designed for professional excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pgCourses.map((course) => (
            <Link 
              key={course.path} 
              to={course.path}
              className="group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg"
            >
              <Card className="p-6 h-full bg-white border-t-4 border-teal-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group-hover:border-teal-700 relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-teal-800 group-hover:text-teal-900 transition-colors">
                    {course.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-teal-600 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-teal-600 mt-2 text-sm">
                  Click to explore colleges offering {course.name}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostgraduateCourses;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Courses = () => {
  const courseTypes = [
    {
      name: "Undergraduate Courses",
      path: "/courses/ug",
      description: "Explore B.Tech, BHM, BHHM, MBBS, Nursing, Pharmacy, and BDS programs",
    },
    {
      name: "Postgraduate Courses",
      path: "/courses/pg",
      description: "Discover MBA/PGDM, MD/MS, and MDS programs",
    },
    {
      name: "Study Abroad",
      path: "/courses/study-abroad",
      description: "Explore international education opportunities in USA, UK, Canada, and Australia",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-teal-800 mb-12 text-center">
          Our Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courseTypes.map((type) => (
            <Link key={type.path} to={type.path}>
              <Card className="p-8 hover:shadow-xl transition-shadow cursor-pointer bg-white border-t-4 border-teal-600 h-full">
                <h2 className="text-2xl font-semibold text-teal-800 mb-4">{type.name}</h2>
                <p className="text-teal-600">{type.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Globe, Building2, Landmark } from "lucide-react";

const StudyAbroad = () => {
  const countries = [
    {
      name: "United States",
      icon: <Landmark className="w-6 h-6" />,
      description: "World-renowned universities offering diverse programs and research opportunities",
      features: ["Ivy League Universities", "Optional Practical Training (OPT)", "Cutting-edge Research"]
    },
    {
      name: "United Kingdom",
      icon: <Building2 className="w-6 h-6" />,
      description: "Historic institutions with prestigious academic traditions",
      features: ["Russell Group Universities", "1-Year Masters Programs", "Rich Cultural Experience"]
    },
    {
      name: "Canada",
      icon: <Globe className="w-6 h-6" />,
      description: "High-quality education with post-study work opportunities",
      features: ["Post-Graduate Work Permit", "Affordable Education", "Multicultural Environment"]
    },
    {
      name: "Australia",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Excellence in research and innovation with a great lifestyle",
      features: ["Post-Study Work Rights", "World-Class Universities", "Quality of Life"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Study Abroad Programs</h1>
          <p className="text-lg text-teal-600 max-w-2xl mx-auto">
            Expand your horizons with international education opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {countries.map((country, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow cursor-pointer bg-white border-t-4 border-teal-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  {country.icon}
                </div>
                <h2 className="text-2xl font-semibold text-teal-800">{country.name}</h2>
              </div>
              <p className="text-teal-600 mb-6">{country.description}</p>
              <ul className="space-y-2">
                {country.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-teal-700">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Contact our counselors for personalized guidance on studying abroad
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors">
            Get Free Counseling
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudyAbroad;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, BookOpen, Users, Building2, GraduationCap, Trophy } from "lucide-react";
import VideoTestimonials from "@/components/VideoTestimonials";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-teal-600/80 to-teal-400/80 text-white py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop)`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">About Siksha Education</h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                Empowering students with expert guidance and support since 2013. ISO 9001:2015 certified institution dedicated to transforming education.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Top Rankings</h3>
                <p className="text-gray-600 mt-2">Ranked among top 20 West B-Schools</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">5000+</h3>
                <p className="text-gray-600 mt-2">Partner Institutions</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-600 mt-2">Placement Assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
                <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Specialized Programs</h3>
                <p className="text-gray-600">Offering various specializations including Marketing, Finance, HR, and Business Analytics</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
                <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry Partnerships</h3>
                <p className="text-gray-600">Strong connections with leading companies for placements and internships</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
                <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Experienced professors and industry experts as faculty members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Medical Colleges Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Partner Medical Colleges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* JIMS Hospital */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/5f31bfd2-a2e6-455e-aa5a-b87b601e4ab4.png" 
                  alt="JIMS Hospital"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">JIMS Hospital</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold">State Quota</p>
                      <p>50 Seats</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold">Management Quota</p>
                      <p>100 Seats</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* JISMSR */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/08ef11ba-c1b2-4db4-ad97-472181fe154c.png" 
                  alt="JISMSR"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">JISMSR Medical College</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold">State Quota</p>
                      <p>50 Seats</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold">Management Quota</p>
                      <p>100 Seats</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* KIMS */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/6421a9c6-a416-4d83-8086-d28fd0b36540.png" 
                  alt="KIMS"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">KIMS Krishnanagar</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Approved by NMC</li>
                    <li>• 50-acre lush green campus</li>
                    <li>• 385-bed super specialty hospital</li>
                    <li>• 10+ Departments</li>
                  </ul>
                </div>
              </div>

              {/* IcareMedical College */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/ccd90ea3-c867-4d60-b531-7c7eb0dbc251.png" 
                  alt="Icare Medical College"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Icare Medical College</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded">
                      <h4 className="font-semibold mb-2">Available Courses</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        <li>• MD/MS</li>
                        <li>• MDS/BDS</li>
                        <li>• MBBS</li>
                        <li>• GNM</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Testimonials */}
        <VideoTestimonials />

        {/* Rankings Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Rankings & Achievements</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-blue-900">Times B-School Rankings</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Ranked 8th among the top 20 West B-Schools</li>
                  <li>• Ranked 9th among the top Private Institutes across India</li>
                  <li>• Ranked 20th among the top 150 B-Schools in India</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-blue-900">Industry Recognition</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Best Management College in West India, 2022</li>
                  <li>• 5 Star Institute Innovation Council 2022</li>
                  <li>• Top Institute for PGDM Placements Awards-2022</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

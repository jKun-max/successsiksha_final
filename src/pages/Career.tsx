import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CareerForm from "@/components/CareerForm";
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  CalendarIcon, 
  GraduationCapIcon,
  IndianRupeeIcon
} from "lucide-react";

interface Career {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  experience: string;
  qualifications: string[];
  description: string;
  responsibilities: string[];
  skills: string[];
  salary: string;
  deadline: string;
}

const Career = () => {
  const [careers] = useState<Career[]>([
    {
      id: 1,
      title: "Assistant Professor - Computer Science",
      department: "Computer Science",
      location: "Kolkata",
      type: "Full-time",
      experience: "3-5 years",
      qualifications: ["Ph.D. in Computer Science", "M.Tech in relevant field"],
      description: "We are seeking an experienced Assistant Professor to join our Computer Science department",
      responsibilities: [
        "Teaching undergraduate and graduate courses",
        "Conducting research and publishing papers",
        "Mentoring students"
      ],
      skills: ["Programming", "Machine Learning", "Data Structures"],
      salary: "₹60,000 - ₹80,000 per month",
      deadline: "2024-03-30"
    },
    {
      id: 2,
      title: "Lab Assistant - Physics",
      department: "Physics",
      location: "Delhi",
      type: "Full-time",
      experience: "1-3 years",
      qualifications: ["B.Sc in Physics", "M.Sc preferred"],
      description: "Looking for a skilled Lab Assistant to support our Physics department",
      responsibilities: [
        "Maintaining lab equipment",
        "Assisting in practical sessions",
        "Inventory management"
      ],
      skills: ["Lab Management", "Equipment Handling", "Safety Protocols"],
      salary: "₹30,000 - ₹40,000 per month",
      deadline: "2024-03-15"
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>("");

  const openForm = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h1>
            <p className="text-xl text-gray-600">Join our team and make a difference in education</p>
          </div>

          <div className="grid gap-6">
            {careers.map((career) => (
              <Card key={career.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <CardTitle className="text-xl font-semibold">{career.title}</CardTitle>
                    <Badge variant="outline" className="bg-teal-50">
                      {career.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="h-4 w-4" />
                        <span>{career.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{career.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IndianRupeeIcon className="h-4 w-4" />
                        <span>{career.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Apply by: {career.deadline}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Description</h3>
                      <p className="text-gray-600">{career.description}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Qualifications</h3>
                      <div className="flex gap-2 flex-wrap">
                        {career.qualifications.map((qualification, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <GraduationCapIcon className="h-4 w-4 text-teal-600" />
                            <span className="text-gray-600">{qualification}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto"
                      onClick={() => openForm(career.title)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <CareerForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        jobTitle={selectedJob}
      />
      <Footer />
    </div>
  );
};

export default Career;

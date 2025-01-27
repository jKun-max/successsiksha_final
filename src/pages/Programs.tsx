import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsHero from "@/components/ProgramsHero";
import { BookOpen, GraduationCap, Award, Users, Target, Briefcase, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CourseDetails from "@/components/CourseDetails";
import CourseArticles from "@/components/CourseArticles";

const Programs = () => {
  const [selectedCourse, setSelectedCourse] = useState<(typeof ugCourses)[number] | (typeof pgCourses)[number] | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <ProgramsHero />
      
      <CourseArticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* UG Programs */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-teal-800 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Undergraduate Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {ugCourses.map((course) => (
                  <li key={course.slug}>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="w-full text-left p-4 rounded-lg hover:bg-teal-50 transition-all duration-300 text-teal-700 hover:text-teal-900 flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        {course.name}
                      </div>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* PG Programs */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-teal-800 flex items-center gap-2">
                <Award className="h-6 w-6" />
                Postgraduate Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pgCourses.map((course) => (
                  <li key={course.slug}>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="w-full text-left p-4 rounded-lg hover:bg-teal-50 transition-all duration-300 text-teal-700 hover:text-teal-900 flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        {course.name}
                      </div>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Existing Programs Grid */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Our Programs</h1>
          <p className="text-lg text-teal-600 max-w-2xl mx-auto">
            Comprehensive educational programs designed to shape your future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-600">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-teal-800">{program.title}</h3>
              <p className="text-teal-600 mb-6">{program.description}</p>
              <ul className="space-y-3">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-teal-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <CourseDetails
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
          course={courseDetails[selectedCourse.slug]}
        />
      )}
      <Footer />
    </div>
  );
};

const ugCourses = [
  { name: "B.Tech", slug: "btech" },
  { name: "BHM", slug: "bhm" },
  { name: "BHHM", slug: "bhhm" },
  { name: "MBBS", slug: "mbbs" },
  { name: "Nursing", slug: "nursing" },
  { name: "Pharmacy", slug: "pharmacy" },
  { name: "BDS", slug: "bds" }
];

const pgCourses = [
  { name: "MD/MS", slug: "md-ms" },
  { name: "MDS", slug: "mds" }
];

const courseDetails = {
  btech: {
    name: "Bachelor of Technology (B.Tech)",
    eligibility: [
      "Must have completed 10+2 with Physics, Chemistry, and Mathematics",
      "Entrance exams like JEE Main/Advanced or state-level engineering exams"
    ],
    branches: [
      "Civil Engineering",
      "Computer Science",
      "Electronics & Communication",
      "Mechanical Engineering"
    ],
    description: "A four-year program focused on technical and engineering skills.",
    careerOpportunities: [
      "Software Engineer",
      "Mechanical Engineer",
      "Civil Engineer",
      "Data Analyst"
    ],
    fees: "Ranges from INR 2-15 Lakhs depending on the institute",
    duration: "4 years"
  },
  bhm: {
    name: "Bachelor of Hotel Management (BHM)",
    eligibility: [
      "10+2 in any stream with a minimum of 50%",
      "Entrance exams like NCHM JEE or institute-specific tests"
    ],
    description: "A three to four-year program focused on hospitality, hotel operations, and customer service.",
    careerOpportunities: [
      "Hotel Manager",
      "Event Manager",
      "Chef",
      "Tourism Manager"
    ],
    fees: "INR 2-5 Lakhs on average",
    duration: "3-4 years"
  },
  bhhm: {
    name: "Bachelor of Hotel and Hospitality Management (BHHM)",
    eligibility: ["10+2 with at least 50% marks in any stream"],
    description: "Focuses on hotel operations, event management, and the hospitality industry.",
    careerOpportunities: [
      "Hospitality Consultant",
      "Resort Manager",
      "Airline Catering Manager"
    ],
    fees: "INR 2-6 Lakhs",
    duration: "3 years"
  },
  mbbs: {
    name: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    eligibility: [
      "10+2 with PCB (Physics, Chemistry, Biology)",
      "Qualifying NEET entrance exam"
    ],
    description: "A five-and-a-half-year course including one year of internship focused on medical training.",
    careerOpportunities: [
      "General Physician",
      "Surgeon",
      "Specialist Doctor"
    ],
    fees: "INR 5-20 Lakhs in government colleges; up to INR 1 crore in private institutions",
    duration: "5.5 years (including internship)"
  },
  nursing: {
    name: "B.Sc Nursing",
    eligibility: ["10+2 with PCB and a minimum of 50%"],
    description: "A four-year course teaching patient care, medical ethics, and clinical practices.",
    careerOpportunities: [
      "Staff Nurse",
      "Clinical Nurse Specialist",
      "Nurse Educator"
    ],
    fees: "INR 1-5 Lakhs",
    duration: "4 years"
  },
  pharmacy: {
    name: "Bachelor of Pharmacy (B.Pharm)",
    eligibility: [
      "10+2 with PCB or PCM",
      "Entrance exams like GPAT"
    ],
    description: "A four-year course focused on the preparation and dispensation of medicines.",
    careerOpportunities: [
      "Pharmacist",
      "Drug Inspector",
      "Pharmaceutical Researcher"
    ],
    fees: "INR 2-6 Lakhs",
    duration: "4 years"
  },
  bds: {
    name: "Bachelor of Dental Surgery (BDS)",
    eligibility: [
      "10+2 with PCB",
      "Qualifying NEET"
    ],
    description: "A five-year program (including an internship) specializing in oral health and dental surgery.",
    careerOpportunities: [
      "Dentist",
      "Dental Surgeon",
      "Orthodontist"
    ],
    fees: "INR 3-10 Lakhs in government colleges; up to INR 25 Lakhs in private colleges",
    duration: "5 years (including internship)"
  },
  "md-ms": {
    name: "Doctor of Medicine/Master of Surgery (MD/MS)",
    eligibility: [
      "MBBS degree",
      "Qualifying NEET-PG"
    ],
    branches: [
      "MD (General Medicine, Pediatrics)",
      "MS (Orthopedics, Surgery)"
    ],
    description: "Specialized training in medical or surgical disciplines over three years.",
    careerOpportunities: [
      "Specialist Doctor",
      "Surgeon",
      "Medical Researcher"
    ],
    fees: "INR 5-20 Lakhs per year",
    duration: "3 years"
  },
  mds: {
    name: "Master of Dental Surgery (MDS)",
    eligibility: [
      "BDS degree",
      "Qualifying NEET-MDS"
    ],
    branches: [
      "Orthodontics",
      "Periodontics",
      "Prosthodontics"
    ],
    description: "A three-year postgraduate program specializing in dental practices and surgeries.",
    careerOpportunities: [
      "Dental Specialist",
      "Academic Lecturer",
      "Researcher"
    ],
    fees: "INR 3-15 Lakhs per year",
    duration: "3 years"
  }
};

const programs = [
  {
    title: "Career Counseling",
    description: "Expert guidance to help you choose the right career path",
    icon: <Target className="w-6 h-6 text-primary" />,
    features: [
      "Personality Assessment",
      "Career Mapping",
      "Industry Insights",
      "One-on-One Sessions"
    ]
  },
  {
    title: "Admission Assistance",
    description: "Complete support for college admissions process",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    features: [
      "College Selection",
      "Application Process",
      "Document Preparation",
      "Interview Preparation"
    ]
  },
  {
    title: "Skill Development",
    description: "Enhance your professional capabilities",
    icon: <Award className="w-6 h-6 text-primary" />,
    features: [
      "Soft Skills Training",
      "Technical Workshops",
      "Leadership Programs",
      "Industry Certifications"
    ]
  },
  {
    title: "Study Abroad",
    description: "Guidance for international education opportunities",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    features: [
      "Country Selection",
      "University Applications",
      "Visa Assistance",
      "Pre-departure Briefing"
    ]
  },
  {
    title: "Placement Support",
    description: "Comprehensive placement assistance",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    features: [
      "Resume Building",
      "Interview Training",
      "Job Matching",
      "Industry Connect"
    ]
  },
  {
    title: "Mentorship Program",
    description: "Learn from industry experts",
    icon: <Users className="w-6 h-6 text-primary" />,
    features: [
      "Industry Mentors",
      "Regular Sessions",
      "Project Guidance",
      "Network Building"
    ]
  }
];

export default Programs;

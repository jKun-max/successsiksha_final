import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, FileIcon, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Notice {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
  priority: "high" | "medium" | "low";
  files: {
    name: string;
    url: string;
  }[];
  expiryDate: string;
}

const Notice = () => {
  const { toast } = useToast();
  const [notices] = useState<Notice[]>([
    {
      id: 1,
      title: "Admission Notice 2024",
      date: "2024-02-20",
      description: "Important notice regarding admission process for academic year 2024",
      category: "Admission",
      priority: "high",
      files: [
        {
          name: "admission_guidelines_2024.pdf",
          url: "/notices/admission_guidelines_2024.pdf"
        }
      ],
      expiryDate: "2024-03-20"
    },
    {
      id: 2,
      title: "Scholarship Applications Open",
      date: "2024-02-18",
      description: "Applications are now open for merit-based scholarships",
      category: "Scholarship",
      priority: "medium",
      files: [
        {
          name: "scholarship_form_2024.pdf",
          url: "/notices/scholarship_form_2024.pdf"
        }
      ],
      expiryDate: "2024-04-15"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 5;

  const handleDownload = (file: { name: string; url: string }) => {
    // Create a link element
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: `Downloading ${file.name}`,
    });
  };

  // Calculate pagination
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);
  const totalPages = Math.ceil(notices.length / noticesPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Notice Board</h1>
            <p className="text-xl text-gray-600">Stay updated with our latest announcements</p>
          </div>

          <div className="mb-8">
            <Input
              type="search"
              placeholder="Search notices..."
              className="max-w-md mx-auto"
            />
          </div>

          <div className="grid gap-6">
            {currentNotices.map((notice) => (
              <Card key={notice.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold">{notice.title}</CardTitle>
                    <Badge variant={
                      notice.priority === "high" ? "destructive" : 
                      notice.priority === "medium" ? "default" : 
                      "secondary"
                    }>
                      {notice.priority.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">{notice.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Published: {notice.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        <span>Expires: {notice.expiryDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileIcon className="h-4 w-4" />
                        <span>Category: {notice.category}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      {notice.files.map((file, index) => (
                        <Button 
                          key={index}
                          className="bg-teal-600 hover:bg-teal-700 flex items-center gap-2"
                          onClick={() => handleDownload(file)}
                        >
                          <FileIcon className="h-4 w-4" />
                          Download {file.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "default" : "outline"}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notice;
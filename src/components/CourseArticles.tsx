import { Card, CardContent } from "./ui/card";

const CourseArticles = () => {
  const articles = [
    {
      title: "MBA/PGDM Programs",
      image: "/lovable-uploads/749a7691-cba0-4218-9a41-a9a8baeb02dc.png",
      description: "Comprehensive MBA programs with specializations in Marketing, Finance, and HR. Features 500+ hours of employability training and industry connections.",
      type: "management"
    },
    {
      title: "MBBS Opportunities",
      image: "/lovable-uploads/6c4a110e-2d9f-469d-8c54-ca18f4fcfea0.png",
      description: "State-of-the-art medical education with 25-acre campus, modern laboratories, and extensive clinical exposure. Scholarships available up to 15%.",
      type: "medical"
    },
    {
      title: "PGDM Specializations",
      image: "/lovable-uploads/99d96366-aa19-4938-9128-3a3607eb17f0.png",
      description: "Advanced PGDM programs with focus on Banking, Analytics, and Digital Marketing. NBA accredited with excellent placement records.",
      type: "management"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600">{article.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {article.type === "management" ? "Management Studies" : "Medical Studies"}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseArticles;
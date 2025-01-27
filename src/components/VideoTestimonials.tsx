import { Card } from "./ui/card";

const VideoTestimonials = () => {
  const testimonials = [
    {
      id: "video1",
      title: "MBA Success Story",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      student: "Recent MBA Graduate",
      description: "Hear about the transformative journey through our MBA program"
    },
    {
      id: "video2",
      title: "Medical Program Experience",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      student: "MBBS Student",
      description: "Learn about our world-class medical education"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Student Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-2">{video.description}</p>
                <span className="text-sm text-gray-500">- {video.student}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
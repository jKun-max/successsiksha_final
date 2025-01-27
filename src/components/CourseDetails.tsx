import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CourseDetail {
  name: string;
  eligibility: string[];
  description: string;
  careerOpportunities: string[];
  fees: string;
  branches?: string[];
  duration?: string;
}

interface CourseDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  course: CourseDetail;
}

const CourseDetails = ({ isOpen, onClose, course }: CourseDetailsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-[#F8F7FF]">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold text-[#6B46C1] mb-6 text-center">
            {course.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4 px-2">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-semibold text-[#6B46C1] text-2xl mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6B46C1] rounded-full"></span>
              Eligibility
            </h3>
            <ul className="list-none space-y-3 text-gray-700">
              {course.eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#6B46C1] mt-1.5">•</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {course.branches && (
            <div className="bg-[#F3F0FF] p-8 rounded-xl shadow-sm border border-purple-100">
              <h3 className="font-semibold text-[#6B46C1] text-2xl mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6B46C1] rounded-full"></span>
                Branches
              </h3>
              <ul className="list-none space-y-3 text-gray-700">
                {course.branches.map((branch, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#6B46C1] mt-1.5">•</span>
                    <span className="text-lg">{branch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-semibold text-[#6B46C1] text-2xl mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6B46C1] rounded-full"></span>
              Description
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">{course.description}</p>
          </div>

          <div className="bg-[#F3F0FF] p-8 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-semibold text-[#6B46C1] text-2xl mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6B46C1] rounded-full"></span>
              Career Opportunities
            </h3>
            <ul className="list-none space-y-3 text-gray-700">
              {course.careerOpportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#6B46C1] mt-1.5">•</span>
                  <span className="text-lg">{opportunity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100">
            <h3 className="font-semibold text-[#6B46C1] text-2xl mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#6B46C1] rounded-full"></span>
              Fees
            </h3>
            <p className="text-gray-700 text-lg">{course.fees}</p>
          </div>

          {course.duration && (
            <div className="bg-[#F3F0FF] p-8 rounded-xl shadow-sm border border-purple-100">
              <h3 className="font-semibold text-[#6B46C1] text-2xl mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-[#6B46C1] rounded-full"></span>
                Duration
              </h3>
              <p className="text-gray-700 text-lg">{course.duration}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetails;
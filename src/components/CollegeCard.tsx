interface College {
  name: string;
  location: string;
  programs: string[];
  fees: string;
}

interface CollegeCardProps {
  college: College;
}

const CollegeCard = ({ college }: CollegeCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-teal-600 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-teal-800">{college.name}</h3>
        <p className="text-teal-600 mb-4 text-sm flex items-start">
          <svg
            className="w-4 h-4 mr-2 mt-1 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {college.location}
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-teal-700 mb-2">Programs Offered:</h4>
            <ul className="list-disc list-inside text-teal-600 text-sm space-y-1">
              {college.programs.map((program, index) => (
                <li key={index} className="line-clamp-1">{program}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-teal-700 mb-1">Annual Fees:</h4>
            <p className="text-teal-600 text-lg font-semibold">₹{college.fees}</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-teal-50 border-t border-teal-100 mt-auto">
        <button className="w-full bg-teal-600 text-white py-2.5 px-4 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
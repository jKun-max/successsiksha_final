import { ZoneData } from '../types/college';

const kolkataColleges = [
  {
    name: "UEM",
    location: "Kolkata",
    programs: ["BBA LLB"],
    fees: "510,000",
    additionalInfo: "₹50,000 per semester (10 semesters)"
  },
  {
    name: "Neotia University",
    location: "Kolkata",
    programs: ["BBA LLB", "BA LLB"],
    fees: "529,000",
    additionalInfo: "1st Semester ₹79,000, Subsequent Semesters ₹50,000"
  },
  {
    name: "Kingstone",
    location: "Kolkata",
    programs: ["BA LLB", "BBA LLB"],
    fees: "400,000",
    additionalInfo: "BA LLB (₹400,000), BBA LLB (₹392,000)"
  },
  {
    name: "Brainware University",
    location: "Kolkata",
    programs: ["BA LLB", "BBA LLB"],
    fees: "517,000",
    additionalInfo: "Semester fees range from ₹26,200 to ₹61,700"
  },
  {
    name: "Adamas",
    location: "Kolkata",
    programs: ["BA LLB", "BBA LLB"],
    fees: "867,000",
    additionalInfo: "Admission Fee: ₹27,000, ₹84,000 per semester"
  }
];

const bangaloreColleges = [
  {
    name: "CMR University",
    location: "Bangalore",
    programs: ["BA LLB (HONS)", "BBA LLB"],
    fees: "750,000",
    additionalInfo: "Alternate semesters at ₹150,000"
  },
  {
    name: "ABBS",
    location: "Bangalore",
    programs: ["BBA LLB"],
    fees: "500,000",
    additionalInfo: "Semester fees range from ₹84,500 to ₹149,000"
  }
];

const otherColleges = [
  {
    name: "IILM",
    location: "Gurugram",
    programs: ["BA LLB", "BBA LLB"],
    fees: "1,700,000",
    additionalInfo: "₹340,000 per semester"
  }
];

export const lawColleges: ZoneData = {
  "Kolkata": kolkataColleges,
  "Bangalore": bangaloreColleges,
  "Other Regions": otherColleges
};
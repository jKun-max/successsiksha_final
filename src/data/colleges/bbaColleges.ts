import { ZoneData } from '../types/college';

const westBengalColleges = [
  {
    name: "EIILM",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "415,000",
    additionalInfo: "Admission Fee: ₹30,000"
  },
  {
    name: "FUTURE",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "374,000",
    additionalInfo: "Admission Fee: ₹30,000"
  },
  {
    name: "EMINENT",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "200,000"
  },
  {
    name: "NEOTIA UNIVERSITY",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "326,000",
    additionalInfo: "Admission Fee: ₹29,000"
  },
  {
    name: "Techno India Group (MSIT)",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "455,000"
  },
  {
    name: "JIS GROUP",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "240,150",
    additionalInfo: "Fee may not be updated"
  },
  {
    name: "JIS UNIVERSITY",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "246,600",
    additionalInfo: "Fee may not be updated"
  },
  {
    name: "ILEAD",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "504,500"
  },
  {
    name: "BRAINWARE",
    location: "Kolkata",
    programs: ["BBA", "BBA (Digital Marketing)"],
    fees: "427,600"
  },
  {
    name: "UNITED WORLD",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "441,000",
    additionalInfo: "Admission Fee: ₹41,000"
  },
  {
    name: "ADAMAS",
    location: "Kolkata",
    programs: ["BBA"],
    fees: "610,200",
    additionalInfo: "Admission Fee: ₹27,000"
  }
];

const bangaloreColleges = [
  {
    name: "AIMS",
    location: "Bangalore",
    programs: ["BBA (NON KARNATAKA)"],
    fees: "413,000"
  },
  {
    name: "CMR University",
    location: "Bangalore",
    programs: ["BBA"],
    fees: "315,000"
  },
  {
    name: "ISME",
    location: "Bangalore",
    programs: ["BBA"],
    fees: "590,000",
    additionalInfo: "Admission Fee: ₹60,000"
  },
  {
    name: "Ramaiah College of Arts, Science & Commerce",
    location: "Bangalore",
    programs: ["BBA"],
    fees: "520,000"
  },
  {
    name: "T JOHN",
    location: "Bangalore",
    programs: ["BBA"],
    fees: "349,000"
  }
];

const otherColleges = [
  {
    name: "UPES",
    location: "Dehradun",
    programs: ["BBA"],
    fees: "1,060,500"
  },
  {
    name: "GNIOT",
    location: "Noida",
    programs: ["BBA"],
    fees: "276,200"
  },
  {
    name: "Aditya",
    location: "Not Specified",
    programs: ["BBA"],
    fees: "270,000",
    additionalInfo: "Fee may not be updated"
  },
  {
    name: "PCET",
    location: "Pune",
    programs: ["BBA"],
    fees: "Contact college for fee details"
  },
  {
    name: "Doon Business School",
    location: "Uttarakhand",
    programs: ["BBA"],
    fees: "575,000",
    additionalInfo: "Admission Fee: ₹35,000"
  },
  {
    name: "Graphic Era",
    location: "Uttarakhand",
    programs: ["BBA"],
    fees: "449,231",
    additionalInfo: "Fee may not be updated"
  }
];

export const bbaColleges: ZoneData = {
  "West Bengal": westBengalColleges,
  "Bangalore": bangaloreColleges,
  "Other Regions": otherColleges
};
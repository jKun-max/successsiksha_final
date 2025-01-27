import { ZoneData } from '../types/college';

const westBengalColleges = [
  {
    name: "EIILM",
    location: "Kolkata",
    programs: ["BCA"],
    fees: "415,000",
    additionalInfo: "Admission Fee: ₹30,000"
  },
  {
    name: "EMINENT",
    location: "Kolkata",
    programs: ["BCA"],
    fees: "200,000"
  },
  {
    name: "Brainware University",
    location: "Kolkata",
    programs: ["BCA"],
    fees: "472,600"
  },
  {
    name: "JIS Colleges",
    location: "Kolkata",
    programs: ["BCA"],
    fees: "240,150",
    additionalInfo: "Admission Fee: ₹62,650 (Not Updated)"
  },
  {
    name: "JIS University",
    location: "Kolkata",
    programs: ["BCA"],
    fees: "264,149",
    additionalInfo: "Not Updated"
  },
  {
    name: "Swami Vivekananda University",
    location: "Kolkata",
    programs: ["BCA"],
    fees: "160,000",
    additionalInfo: "Admission Fee: ₹60,000 (Not Updated)"
  },
  {
    name: "HERITAGE ACADEMY",
    location: "Kolkata",
    programs: ["BCA"],
    fees: "372,000",
    additionalInfo: "Admission Fee: ₹30,000"
  },
  {
    name: "NEOTIA",
    location: "Kolkata",
    programs: ["BCA"],
    fees: "326,000"
  },
  {
    name: "ADAMAS",
    location: "Kolkata",
    programs: ["BCA"],
    fees: "487,800",
    additionalInfo: "Admission Fee: ₹27,000"
  }
];

const bangaloreColleges = [
  {
    name: "AIMS",
    location: "Bangalore",
    programs: ["BCA"],
    fees: "560,500"
  },
  {
    name: "CMR University",
    location: "Bangalore",
    programs: ["BCA"],
    fees: "345,000"
  },
  {
    name: "T JOHN",
    location: "Bangalore",
    programs: ["BCA"],
    fees: "344,000"
  }
];

const otherColleges = [
  {
    name: "UPES",
    location: "Dehradun",
    programs: ["BCA"],
    fees: "558,792"
  },
  {
    name: "GNIOT",
    location: "Noida",
    programs: ["BCA"],
    fees: "276,200"
  },
  {
    name: "DOON BUSINESS SCHOOL",
    location: "Dehradun",
    programs: ["BCA"],
    fees: "235,000",
    additionalInfo: "Admission Fee: ₹10,000"
  },
  {
    name: "GRAPHIC ERA",
    location: "Dehradun",
    programs: ["BCA"],
    fees: "Contact college for fee details",
    additionalInfo: "Not Updated"
  },
  {
    name: "PCET",
    location: "Pune",
    programs: ["BCA"],
    fees: "300,000",
    additionalInfo: "Not Updated"
  }
];

export const bcaColleges: ZoneData = {
  "West Bengal": westBengalColleges,
  "Bangalore": bangaloreColleges,
  "Other Regions": otherColleges
};
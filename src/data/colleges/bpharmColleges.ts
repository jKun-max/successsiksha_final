import { ZoneData } from '../types/college';

const westBengalColleges = [
  {
    name: "BRAINWARE University",
    location: "Barasat, W.B",
    programs: ["B.Pharm"],
    fees: "689,600",
    additionalInfo: "Fee Breakdown: 138,200 + 136,200 + 75,700 + 75,700 + 74,700 + 74,700 + 73,200 + 41,200"
  },
  {
    name: "Neotia University",
    location: "Kolkata, W.B",
    programs: ["B.Pharm"],
    fees: "701,000",
    additionalInfo: "Fee Breakdown: 113,000 + (84,000 × 7)"
  },
  {
    name: "Eminent",
    location: "Barasat, W.B",
    programs: ["B.Pharm"],
    fees: "378,500",
    additionalInfo: "Fee Breakdown: 51,500 + 45,000 + 47,000 + 45,000 + 47,000 + 47,000 + 49,000 + 47,000"
  }
];

const bangaloreColleges = [
  {
    name: "M.S.Ramaiah University of Applied Science",
    location: "Bangalore",
    programs: ["B.Pharm"],
    fees: "1,000,000",
    additionalInfo: "Fee Breakdown: ₹250,000 × 4 years"
  },
  {
    name: "T.John",
    location: "Bangalore",
    programs: ["B.Pharm"],
    fees: "575,000",
    additionalInfo: "Fee Breakdown: 200,000 + 125,000 + 125,000 + 125,000"
  },
  {
    name: "RR Institution",
    location: "Bangalore",
    programs: ["B.Pharm"],
    fees: "555,000",
    additionalInfo: "Fee Breakdown: 225,000 + 110,000 + 110,000 + 110,000"
  },
  {
    name: "HARSHA",
    location: "Bangalore",
    programs: ["B.Pharm"],
    fees: "830,000",
    additionalInfo: "Fee Breakdown: 225,000 + 205,000 + 200,000 + 200,000"
  }
];

const andhraColleges = [
  {
    name: "Aditya Institution",
    location: "Andhra Pradesh",
    programs: ["B.Pharm"],
    fees: "400,000",
    additionalInfo: "Fee Breakdown: 100,000 × 4 (Fee may not be updated)"
  }
];

export const bpharmColleges: ZoneData = {
  "West Bengal": westBengalColleges,
  "Bangalore": bangaloreColleges,
  "Andhra Pradesh": andhraColleges
};
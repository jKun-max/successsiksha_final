import { ZoneData } from '../types/college';

const westBengalColleges = [
  {
    name: "Eminent",
    location: "Barasat, W.B",
    programs: ["D.Pharm"],
    fees: "150,000",
    additionalInfo: "Fee Breakdown: 40,000 + 38,000 + 38,000 + 34,000"
  },
  {
    name: "BRAINWARE University",
    location: "Barasat, W.B",
    programs: ["D.Pharm"],
    fees: "297,400",
    additionalInfo: "Fee Breakdown: 85,000 + 81,200 + 72,500 + 58,700"
  },
  {
    name: "JIS UNIVERSITY",
    location: "Kolkata, W.B",
    programs: ["D.Pharm"],
    fees: "157,000",
    additionalInfo: "Fee may not be updated"
  },
  {
    name: "JIS GROUP",
    location: "Kolkata, W.B",
    programs: ["D.Pharm"],
    fees: "95,000",
    additionalInfo: "Fee Breakdown: 35,000 + (20,000 × 3) - Fee may not be updated"
  }
];

const bangaloreColleges = [
  {
    name: "T.John",
    location: "Bangalore",
    programs: ["D.Pharm"],
    fees: "140,000",
    additionalInfo: "Fee Breakdown: 75,000 + 65,000"
  },
  {
    name: "RR Institution",
    location: "Bangalore",
    programs: ["D.Pharm"],
    fees: "210,000",
    additionalInfo: "Fee Breakdown: 140,000 + 70,000"
  },
  {
    name: "HARSHA",
    location: "Bangalore",
    programs: ["D.Pharm"],
    fees: "180,000",
    additionalInfo: "Fee Breakdown: 90,000 + 90,000"
  }
];

export const dpharmColleges: ZoneData = {
  "West Bengal": westBengalColleges,
  "Bangalore": bangaloreColleges
};
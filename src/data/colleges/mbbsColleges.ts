import { College } from '../types/college';

export const mbbsColleges: { [key: string]: College[] } = {
  kolkata: [
    {
      name: "Medical College and Hospital Kolkata",
      location: "College Street, Kolkata",
      programs: [
        "MBBS",
        "MD/MS Programs",
        "Super Speciality Courses"
      ],
      fees: "1,25,000 per year"
    },
    {
      name: "R.G. Kar Medical College",
      location: "Khudiram Bose Sarani, Kolkata",
      programs: [
        "MBBS",
        "Post Graduate Medical Programs"
      ],
      fees: "1,20,000 per year"
    }
  ],
  delhi: [
    {
      name: "AIIMS Delhi",
      location: "Ansari Nagar, New Delhi",
      programs: [
        "MBBS",
        "MD/MS Programs",
        "DM/MCh Super Speciality"
      ],
      fees: "1,500 per year"
    },
    {
      name: "Maulana Azad Medical College",
      location: "Bahadur Shah Zafar Marg, New Delhi",
      programs: [
        "MBBS",
        "Post Graduate Medical Courses"
      ],
      fees: "25,000 per year"
    }
  ]
};
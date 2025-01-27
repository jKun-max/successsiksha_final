import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { collegeData } from '@/data/collegeData';
import CollegeCard from './CollegeCard';
import { Card } from './ui/card';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CollegeList = () => {
  const { courseType } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [feesRange, setFeesRange] = useState('all');
  
  const colleges = courseType ? collegeData[courseType] : {};

  if (!colleges || Object.keys(colleges).length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-600">No colleges found for this course type.</p>
      </Card>
    );
  }

  // Get unique programs across all colleges
  const allPrograms = new Set<string>();
  Object.values(colleges).forEach(collegeList => 
    collegeList.forEach(college => 
      college.programs.forEach(program => allPrograms.add(program))
    )
  );

  // Filter colleges based on search, program, and fees
  const filterColleges = (collegeList: any[]) => {
    return collegeList.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          college.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesProgram = selectedProgram === 'all' || 
                            college.programs.some((p: string) => 
                              p.toLowerCase().includes(selectedProgram.toLowerCase())
                            );

      let matchesFees = true;
      if (feesRange !== 'all') {
        const feeValue = parseInt(college.fees.replace(/[^0-9]/g, ''));
        switch (feesRange) {
          case 'under5':
            matchesFees = feeValue < 500000;
            break;
          case '5to10':
            matchesFees = feeValue >= 500000 && feeValue <= 1000000;
            break;
          case 'above10':
            matchesFees = feeValue > 1000000;
            break;
        }
      }

      return matchesSearch && matchesProgram && matchesFees;
    });
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-lg shadow">
        <Input
          placeholder="Search colleges..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <Select
          value={selectedProgram}
          onValueChange={setSelectedProgram}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by program" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Programs</SelectItem>
            {Array.from(allPrograms).map((program) => (
              <SelectItem key={program} value={program}>
                {program}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={feesRange}
          onValueChange={setFeesRange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by fees" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ranges</SelectItem>
            <SelectItem value="under5">Under 5 Lakhs</SelectItem>
            <SelectItem value="5to10">5-10 Lakhs</SelectItem>
            <SelectItem value="above10">Above 10 Lakhs</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {Object.entries(colleges).map(([location, collegeList]) => {
        const filteredColleges = filterColleges(collegeList);
        if (filteredColleges.length === 0) return null;

        return (
          <div key={location} className="space-y-4">
            <h2 className="text-xl font-bold text-teal-800 capitalize">{location}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredColleges.map((college, index) => (
                <CollegeCard key={index} college={college} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CollegeList;
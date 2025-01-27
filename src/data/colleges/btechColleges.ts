import { ZoneData } from '../types/college';
import { westBengalColleges } from './regions/btechCollegesWestBengal';
import { karnatakaColleges } from './regions/btechCollegesKarnataka';
import { tamilNaduColleges } from './regions/btechCollegesTamilNadu';
import { delhiColleges } from './regions/btechCollegesDelhi';
import { andhraColleges } from './regions/btechCollegesAndhra';
import { uttarakhandColleges } from './regions/btechCollegesUttarakhand';

export const btechColleges: ZoneData = {
  // West Bengal regions
  kolkata: westBengalColleges.filter(college => 
    college.location.toLowerCase().includes('kolkata')),
  howrah: westBengalColleges.filter(college => 
    college.location.toLowerCase().includes('howrah')),
  durgapur: westBengalColleges.filter(college => 
    college.location.toLowerCase().includes('durgapur')),
  haldia: westBengalColleges.filter(college => 
    college.location.toLowerCase().includes('haldia')),
    
  // Karnataka regions
  bengaluru: karnatakaColleges.filter(college => 
    college.location.toLowerCase().includes('bengaluru') || 
    college.location.toLowerCase().includes('bangalore')),
    
  // Tamil Nadu regions
  chennai: tamilNaduColleges.filter(college => 
    college.location.toLowerCase().includes('chennai')),
  vellore: tamilNaduColleges.filter(college => 
    college.location.toLowerCase().includes('vellore')),
    
  // Delhi NCR regions
  delhi: delhiColleges.filter(college => 
    college.location.toLowerCase().includes('delhi') || 
    college.location.toLowerCase().includes('noida')),
    
  // Andhra Pradesh regions
  andhra: andhraColleges,
    
  // Uttarakhand regions
  uttarakhand: uttarakhandColleges
};
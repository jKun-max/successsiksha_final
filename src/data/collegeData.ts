import { mbaColleges } from './colleges/mbaColleges';
import { btechColleges } from './colleges/btechColleges';
import { bhmColleges } from './colleges/bhmColleges';
import { bhhmColleges } from './colleges/bhhmColleges';
import { mbbsColleges } from './colleges/mbbsColleges';
import { nursingColleges } from './colleges/nursingColleges';
import { pharmacyColleges } from './colleges/pharmacyColleges';
import { bdsColleges } from './colleges/bdsColleges';
import { mdmsColleges } from './colleges/mdmsColleges';
import { mdsColleges } from './colleges/mdsColleges';
import { bbaColleges } from './colleges/bbaColleges';
import { bpharmColleges } from './colleges/bpharmColleges';
import { dpharmColleges } from './colleges/dpharmColleges';
import { lawColleges } from './colleges/lawColleges';
import { bcaColleges } from './colleges/bcaColleges';
import { ZoneData } from './types/college';

export const collegeData: { [key: string]: ZoneData } = {
  // Undergraduate Programs
  btech: btechColleges,
  bhm: bhmColleges,
  bhhm: bhhmColleges,
  mbbs: mbbsColleges,
  nursing: nursingColleges,
  pharmacy: pharmacyColleges,
  bds: bdsColleges,
  bba: bbaColleges,
  bpharm: bpharmColleges,
  dpharm: dpharmColleges,
  law: lawColleges,
  bca: bcaColleges,
  
  // Postgraduate Programs
  'md-ms': mdmsColleges,
  mds: mdsColleges,
  mba: mbaColleges,
};

export type CourseType = 'mba' | 'btech' | 'bhm' | 'bhhm' | 'mbbs' | 'nursing' | 
  'pharmacy' | 'bds' | 'md-ms' | 'mds' | 'bba' | 'bpharm' | 'dpharm' | 'law' | 'bca';
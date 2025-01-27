import { ZoneData } from '../types/college';
import { mbaCollegesKolkata } from './regions/mbaCollegesKolkata';
import { mbaCollegesDelhi } from './regions/mbaCollegesDelhi';
import { mbaCollegesBangalore } from './regions/mbaCollegesBangalore';

export const mbaColleges: ZoneData = {
  kolkata: mbaCollegesKolkata,
  delhi: mbaCollegesDelhi,
  bangalore: mbaCollegesBangalore,
};
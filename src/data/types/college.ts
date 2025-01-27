export type College = {
  name: string;
  location: string;
  programs: string[];
  fees: string;
  additionalInfo?: string;
}

export type ZoneData = {
  [key: string]: College[];
}
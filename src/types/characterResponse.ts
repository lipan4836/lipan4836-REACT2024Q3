interface CharacterResponse {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  total: number;
}

interface Character {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  family?: Family;
  jutsu: string[];
  natureType?: string[];
  personal: Personal;
  rank: Rank;
  tools?: string[];
  voiceActors?: VoiceActors;
}

interface Debut {
  manga?: string;
  anime?: string;
  novel?: string;
  movie?: string;
  game?: string;
  ova?: string;
  appearsIn?: string;
}

interface Family {
  grandfather?: string;
  father?: string;
  uncle?: string;
  cousin?: string;
  mother?: string;
  sister?: string;
  son?: string;
  daughter?: string;
  husband?: string;
  adoptiveSon?: string;
  [key: string]: string | undefined; // для поддержания гибкости интерфейса
}

interface Personal {
  birthdate?: string;
  sex: string;
  age?: { [key: string]: string };
  height?: { [key: string]: string };
  weight?: { [key: string]: string };
  bloodType?: string;
  kekkeiGenkai?: string;
  occupation?: string;
  affiliation?: string[];
  team?: string[];
  clan?: string[];
  status?: string;
}

interface Rank {
  ninjaRank: { [key: string]: string };
  ninjaRegistration?: string;
}

interface VoiceActors {
  japanese: string;
  english: string;
}

export type { CharacterResponse, Character };

import { Character } from './characterResponse';

interface AppContextProps {
  darkTheme: boolean;
  toggleTheme: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedItems: Character[];
  addItem: (item: Character) => void;
  removeItem: (id: number) => void;
  clearItems: () => void;
}

export type { AppContextProps };

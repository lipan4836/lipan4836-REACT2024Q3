interface AppContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  triggerSearch: boolean;
  handleSearch: () => void;
  resetTriggerSearch: () => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  darkTheme: boolean;
  toggleTheme: () => void;
}

export type { AppContextProps };

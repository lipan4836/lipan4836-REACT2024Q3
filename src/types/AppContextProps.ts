interface AppContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  triggerSearch: boolean;
  handleSearch: () => void;
  resetTriggerSearch: () => void;
}

export type { AppContextProps };

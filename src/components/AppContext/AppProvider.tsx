import { useState, useCallback, useEffect, ReactNode } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string>(
    () => localStorage.getItem('searchQuery') || '',
  );
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);

  const handleSearch = useCallback(() => {
    setSearchQuery((prevQuery) => prevQuery.trim());
    setTriggerSearch(true);
  }, []);

  const resetTriggerSearch = useCallback(() => {
    setTriggerSearch(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  return (
    <AppContext.Provider
      value={{ searchQuery, setSearchQuery, triggerSearch, handleSearch, resetTriggerSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

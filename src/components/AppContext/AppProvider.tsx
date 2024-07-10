import { useState, useCallback, useEffect, ReactNode } from 'react';
import AppContext from './AppContext';
import useSearchQuery from '../../hooks/useSearchQuery';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useSearchQuery('searchQuery');
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);

  const handleSearch = useCallback(() => {
    console.log('handleSearch called');
    setTriggerSearch(true);
  }, []);

  const resetTriggerSearch = useCallback(() => {
    console.log('resetTriggerSearch called');
    setTriggerSearch(false);
  }, []);

  useEffect(() => {
    console.log('searchQuery updated:', searchQuery);
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

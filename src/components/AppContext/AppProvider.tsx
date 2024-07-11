import { useState, useCallback, useEffect, ReactNode } from 'react';
import AppContext from './AppContext';
import useSearchQuery from '../../hooks/useSearchQuery';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useSearchQuery('searchQuery');
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearch = useCallback(() => {
    setTriggerSearch(true);
  }, []);

  const resetTriggerSearch = useCallback(() => {
    setTriggerSearch(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        triggerSearch,
        handleSearch,
        resetTriggerSearch,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

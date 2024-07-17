import { useState, useCallback, useEffect, ReactNode } from 'react';
import AppContext from './AppContext';
import useSearchQuery from '../../hooks/useSearchQuery';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useSearchQuery('searchQuery');
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [darkTheme, setDarkTheme] = useState<boolean>(
    () => localStorage.getItem('darkTheme') === 'true',
  );

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

  const toggleTheme = useCallback(() => {
    setDarkTheme((prevTheme) => !prevTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkTheme', darkTheme.toString());
    document.body.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

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
        darkTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

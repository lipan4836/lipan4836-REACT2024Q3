import { useState, useCallback, useEffect, ReactNode } from 'react';
import AppContext from './AppContext';
import { Character } from '../../types/characterResponse';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [searchQuery, setSearchQueryState] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<Character[]>([]);

  const toggleTheme = useCallback(() => {
    setDarkTheme((prevTheme) => !prevTheme);
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setSearchQueryState(query);
  }, []);

  const addItem = (item: Character) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id: number) => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearItems = () => {
    setSelectedItems([]);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  return (
    <AppContext.Provider
      value={{
        darkTheme,
        toggleTheme,
        searchQuery,
        setSearchQuery,
        selectedItems,
        addItem,
        removeItem,
        clearItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

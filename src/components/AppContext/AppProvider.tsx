import { useState, useCallback, useEffect, ReactNode } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(
    () => localStorage.getItem('darkTheme') === 'true',
  );

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
        darkTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

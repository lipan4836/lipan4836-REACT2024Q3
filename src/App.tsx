import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MainContent from './components/Main/MainContent';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>(
    () => localStorage.getItem('searchQuery') || '',
  );
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);

  const handleSearch = useCallback(() => {
    setTriggerSearch(true);
  }, []);

  const resetTriggerSearch = useCallback(() => {
    setTriggerSearch(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  return (
    <>
      <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} onSearch={handleSearch} />
      <MainContent
        searchQuery={searchQuery}
        triggerSearch={triggerSearch}
        resetTriggerSearch={resetTriggerSearch}
      />
    </>
  );
}

export default App;

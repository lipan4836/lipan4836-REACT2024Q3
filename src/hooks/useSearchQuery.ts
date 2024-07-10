import { useCallback, useEffect, useState } from 'react';

const useSearchQuery = (key: string) => {
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    return localStorage.getItem(key) || '';
  });

  useEffect(() => {
    const handleUnload = () => {
      localStorage.setItem(key, searchQuery);
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      localStorage.setItem(key, searchQuery);
    };
  });

  const updateSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return [searchQuery, updateSearchQuery] as const;
};

export default useSearchQuery;

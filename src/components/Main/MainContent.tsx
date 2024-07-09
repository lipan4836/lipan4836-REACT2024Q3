import './mainContent.scss';
import { Character, CharacterResponse } from '../../types/characterResponse';
import fetchData from '../../api/api';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import NotFoundChar from '../NotFoundChar/NotFoundChar';
import { useCallback, useEffect, useState } from 'react';

interface MainContentProps {
  searchQuery: string;
  triggerSearch: boolean;
  resetTriggerSearch: () => void;
}

function MainContent({ searchQuery, triggerSearch, resetTriggerSearch }: MainContentProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response: CharacterResponse = await fetchData(1, 6, searchQuery);
      setCharacters(response.characters);
      setLoading(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  useEffect(() => {
    if (triggerSearch) {
      loadCharacters().then(resetTriggerSearch);
    }
  }, [triggerSearch, loadCharacters, resetTriggerSearch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="main">
      {characters.length > 0 ? (
        <div className="mainWrap">
          {characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <NotFoundChar />
      )}
    </main>
  );
}

export default MainContent;

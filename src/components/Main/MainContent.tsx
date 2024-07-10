import './mainContent.scss';
import { Character, CharacterResponse } from '../../types/characterResponse';
import fetchData from '../../api/api';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import NotFoundChar from '../NotFoundChar/NotFoundChar';
import { useCallback, useEffect, useState } from 'react';
import useAppContext from '../AppContext/useAppContext';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';

function MainContent() {
  const { searchQuery, triggerSearch, resetTriggerSearch } = useAppContext();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = 6;

  const loadCharacters = useCallback(async () => {
    console.log('loadCharacters called with query:', searchQuery);
    setLoading(true);
    setError(null);

    try {
      const response: CharacterResponse = await fetchData(page, limit, searchQuery);
      setCharacters(response.characters);
      setTotalPages(Math.floor(response.total / response.pageSize));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [page, searchQuery]);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  useEffect(() => {
    if (triggerSearch) {
      console.log('triggerSearch is true, loading characters');
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
      <Pagination totalPages={totalPages} />
    </main>
  );
}

export default MainContent;

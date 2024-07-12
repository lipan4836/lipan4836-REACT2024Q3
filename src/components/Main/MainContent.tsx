import './mainContent.scss';
import { Character, CharacterResponse } from '../../types/characterResponse';
import { fetchData } from '../../api/api';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import NotFoundChar from '../NotFoundChar/NotFoundChar';
import { useCallback, useEffect, useState } from 'react';
import useAppContext from '../AppContext/useAppContext';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Pagination from './Pagination';

function MainContent() {
  const { searchQuery, triggerSearch, resetTriggerSearch } = useAppContext();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 6;
  const navigate = useNavigate();
  const { pageId } = useParams();

  const loadCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response: CharacterResponse = await fetchData(pageId ? +pageId : 1, limit, searchQuery);
      setCharacters(response.characters);
      setTotalPages(Math.floor(response.total / response.pageSize));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [pageId, searchQuery]);

  useEffect(() => {
    if (!pageId) {
      navigate('/page/1');
    } else {
      loadCharacters();
    }
  }, [pageId, loadCharacters, navigate]);

  useEffect(() => {
    if (triggerSearch) {
      loadCharacters().then(resetTriggerSearch);
    }
  }, [triggerSearch, loadCharacters, resetTriggerSearch]);

  const handleCardClick = (id: number) => {
    navigate(`details/${id}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="main">
      <div className="cardList">
        {characters.length > 0 ? (
          <div className="mainWrap">
            {characters.map((character) => (
              <Card
                key={character.id}
                character={character}
                onClick={() => handleCardClick(character.id)}
              />
            ))}
          </div>
        ) : (
          <NotFoundChar />
        )}
        <Pagination totalPages={totalPages} />
      </div>
      <Outlet />
    </main>
  );
}

export default MainContent;

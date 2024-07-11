import './mainContent.scss';
import { Character, CharacterResponse } from '../../types/characterResponse';
import { fetchData } from '../../api/api';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import NotFoundChar from '../NotFoundChar/NotFoundChar';
import { useCallback, useEffect, useState } from 'react';
import useAppContext from '../AppContext/useAppContext';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';

function MainContent() {
  const { searchQuery, triggerSearch, resetTriggerSearch, currentPage, setCurrentPage } =
    useAppContext();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 6;
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const loadCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response: CharacterResponse = await fetchData(currentPage, limit, searchQuery);
      setCharacters(response.characters);
      setTotalPages(Math.ceil(response.total / response.pageSize));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchQuery]);

  useEffect(() => {
    const page = searchParams.get('page');
    if (!page) {
      setSearchParams({ page: '1' });
      setCurrentPage(1);
    } else {
      setCurrentPage(parseInt(page, 10));
    }
  }, [setSearchParams, setCurrentPage, searchParams]);

  useEffect(() => {
    loadCharacters();
  }, [currentPage, loadCharacters]);

  useEffect(() => {
    if (triggerSearch) {
      loadCharacters().then(resetTriggerSearch);
    }
  }, [triggerSearch, loadCharacters, resetTriggerSearch]);

  const handleCardClick = (id: number) => {
    const currentParams = new URLSearchParams(location.search);
    currentParams.set('details', id.toString());
    navigate(`?${currentParams.toString()}`);
  };

  return (
    <main className="main">
      <div className="cardList">
        {loading ? (
          <Loader />
        ) : error ? (
          <div>Error: {error}</div>
        ) : characters.length > 0 ? (
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
      {searchParams.get('details') && (
        <div className="characterDetails">
          <Outlet />
        </div>
      )}
    </main>
  );
}

export default MainContent;

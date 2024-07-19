import './mainContent.scss';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import NotFoundChar from '../NotFoundChar/NotFoundChar';
import { useEffect } from 'react';
import useAppContext from '../AppContext/useAppContext';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Pagination from './Pagination';
import { useAppSelector, useAppDispatch } from '../../hooks/hooksRedux';
import { setTriggerSearch } from '../../store/slices/searchSlice';
import { useFetchCharactersQuery } from '../../store/slices/apiSlice';
import { Character } from '../../types/characterResponse';

function MainContent() {
  const { darkTheme } = useAppContext();
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.search.searchQuery);
  const triggerSearch = useAppSelector((state) => state.search.triggerSearch);
  const navigate = useNavigate();
  const { pageId } = useParams();

  const page = pageId ? +pageId : 1;
  const limit = 6;

  const { data, error, isLoading } = useFetchCharactersQuery({
    page,
    limit,
    searchQuery: searchQuery,
  });

  useEffect(() => {
    if (!pageId) {
      navigate('/page/1');
    } else {
      dispatch(setTriggerSearch(false));
    }
  }, [pageId, dispatch, navigate]);

  useEffect(() => {
    if (triggerSearch) {
      dispatch(setTriggerSearch(false));
    }
  }, [triggerSearch, dispatch]);

  const handleCardClick = (id: number) => {
    navigate(`details/${id}`);
  };

  const handleClosePage = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      navigate(`/page/${pageId}`);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const characters: Character[] = data ? data.characters : [];
  const totalPages = data ? Math.floor(data.total / data.pageSize) : 1;

  return (
    <main className={darkTheme ? 'main mainDark' : 'main'}>
      <div className="cardList">
        {characters.length > 0 ? (
          <div className="mainWrap" onClick={handleClosePage}>
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

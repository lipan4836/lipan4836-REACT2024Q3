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
import { setCurrentPage } from '../../store/slices/pageSlice';
import { setSelectedItems } from '../../store/slices/selectedItemsSlice';
import { Character } from '../../types/characterResponse';
import { RootState } from '../../store/store';
import Flyout from '../Flyout/Flyout';

function MainContent() {
  const { darkTheme } = useAppContext();
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state: RootState) => state.search.searchQuery);
  const triggerSearch = useAppSelector((state: RootState) => state.search.triggerSearch);
  const selectedItems = useAppSelector((state: RootState) => state.selectedItems.selectedItems);
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
    const savedPage = localStorage.getItem('currentPage');
    const savedSelectedItems = localStorage.getItem('selectedItems');
    if (savedPage) {
      dispatch(setCurrentPage(Number(savedPage)));
    }

    if (savedSelectedItems) {
      dispatch(setSelectedItems(JSON.parse(savedSelectedItems)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('currentPage', page.toString());
  }, [page]);

  useEffect(() => {
    if (triggerSearch) dispatch(setTriggerSearch(false));
  }, [triggerSearch, dispatch]);

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  }, [selectedItems]);

  useEffect(() => {
    if (data) {
      dispatch(setCurrentPage(page));
      navigate(`/page/${page}`, { replace: true });
    }
  }, [data, dispatch, navigate, page]);

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
        {selectedItems.length > 0 && <Flyout />}
      </div>
      <Outlet />
    </main>
  );
}

export default MainContent;

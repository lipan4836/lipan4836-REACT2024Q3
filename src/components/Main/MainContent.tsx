import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import NotFoundChar from '../NotFoundChar/NotFoundChar';
// import useAppContext from '../AppContext/useAppContext';
import Pagination from './Pagination';
import { Character } from '../../types/characterResponse';
// import Flyout from '../Flyout/Flyout';

interface MainContentProps {
  characters: Character[];
  totalPages: number;
  isFetching: boolean;
  error: unknown;
  currentPage: number;
  searchQuery: string;
}

const MainContent: React.FC<MainContentProps> = ({
  characters,
  totalPages,
  isFetching,
  error,
  currentPage,
  searchQuery,
}) => {
  // const { darkTheme, selectedItems } = useAppContext();

  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  // const handleCardClick = (id: number) => {
  //   console.log(id);
  // }

  const handleClosePage = () => {
    console.log('close card');
  };

  return (
    <main className={'main'}>
      <div className="cardList">
        {characters.length > 0 ? (
          <div className="mainWrap" onClick={handleClosePage}>
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <NotFoundChar />
        )}
        <Pagination totalPages={totalPages} currentPage={currentPage} searchQuery={searchQuery} />
        {/* {selectedItems.length > 0 && <Flyout />} */}
      </div>
    </main>
  );
};

export default MainContent;

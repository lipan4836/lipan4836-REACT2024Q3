import SearchInput from './SearchInput';
import './SearchBlock.scss';
import SearchBtn from './SearchBtn';
import ErrorSimBtn from '../ErrorBoundary/ErrorSimBtn';

interface SearchBlockProps {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  onSearch: () => void;
}

function SearchBlock({ onSearch, setSearchQuery, searchQuery }: SearchBlockProps) {
  return (
    <div className="searchBlock">
      <SearchInput setSearchQuery={setSearchQuery} searchQuery={searchQuery} onSearch={onSearch} />
      <SearchBtn onClick={onSearch} />
      <ErrorSimBtn />
    </div>
  );
}

export default SearchBlock;

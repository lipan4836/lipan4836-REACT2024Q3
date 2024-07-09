import SearchInput from './SearchInput';
import './SearchBlock.scss';
import SearchBtn from './SearchBtn';
import ErrorSimBtn from '../ErrorBoundary/ErrorSimBtn';

function SearchBlock() {
  return (
    <div className="searchBlock">
      <SearchInput />
      <SearchBtn />
      <ErrorSimBtn />
    </div>
  );
}

export default SearchBlock;

import SearchInput from './SearchInput';
import SearchBtn from './SearchBtn';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function SearchBlock() {
  return (
    <div className="searchBlock">
      <SearchInput />
      <SearchBtn />
      <ThemeBtn />
    </div>
  );
}

export default SearchBlock;

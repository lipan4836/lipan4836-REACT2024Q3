import SearchInput from './SearchInput';
import './SearchBlock.scss';
import SearchBtn from './SearchBtn';

function SearchBlock() {
  return (
    <div className="searchBlock">
      <SearchInput />
      <SearchBtn />
    </div>
  );
}

export default SearchBlock;

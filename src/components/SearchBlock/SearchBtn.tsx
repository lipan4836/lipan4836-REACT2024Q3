import searchLogo from '../../assets/svg/btn-search.svg';
import useAppContext from '../AppContext/useAppContext';

function SearchBtn() {
  const { handleSearch } = useAppContext();

  return (
    <button className="searchBlock_btn" onClick={handleSearch}>
      <img src={searchLogo} alt="search" className="searchBlock_btn__img" />
    </button>
  );
}

export default SearchBtn;

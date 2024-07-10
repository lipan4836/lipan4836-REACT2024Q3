import searchLogo from '../../assets/svg/btn-search.svg';
import useAppContext from '../AppContext/useAppContext';

function SearchBtn() {
  const { handleSearch } = useAppContext();

  const handleClick = () => {
    console.log('Search button clicked');
    handleSearch();
  };

  return (
    <button className="searchBlock_btn" onClick={handleClick}>
      <img src={searchLogo} alt="search" className="searchBlock_btn__img" />
    </button>
  );
}

export default SearchBtn;

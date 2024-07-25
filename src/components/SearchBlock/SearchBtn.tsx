import searchLogo from '../../assets/svg/btn-search.svg';
import { useAppDispatch } from '../../hooks/hooksRedux';
import { setTriggerSearch } from '../../store/slices/searchSlice';

function SearchBtn() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setTriggerSearch(true));
  };

  return (
    <button className="searchBlock_btn" onClick={handleClick}>
      <img src={searchLogo} alt="search" className="searchBlock_btn__img" />
    </button>
  );
}

export default SearchBtn;

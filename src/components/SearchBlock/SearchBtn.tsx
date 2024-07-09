import searchLogo from '../../assets/svg/btn-search.svg';

interface SearchBtnProps {
  onClick: () => void;
}

function SearchBtn({ onClick }: SearchBtnProps) {
  return (
    <button className="searchBlock_btn" onClick={onClick}>
      <img src={searchLogo} alt="search" className="searchBlock_btn__img" />
    </button>
  );
}

export default SearchBtn;

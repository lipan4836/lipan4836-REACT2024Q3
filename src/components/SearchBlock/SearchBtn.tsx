import Image from 'next/image';
import searchLogo from '../../assets/svg/btn-search.svg';

function SearchBtn() {
  return (
    <button className="searchBlock_btn">
      <Image src={searchLogo} alt="search" className="searchBlock_btn__img" />
    </button>
  );
}

export default SearchBtn;

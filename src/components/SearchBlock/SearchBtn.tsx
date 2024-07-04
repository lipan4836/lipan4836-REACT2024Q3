import { Component } from 'react';
import searchLogo from '../../assets/svg/btn-search.svg';

class SearchBtn extends Component {
  render() {
    return (
      <button className="searchBlock_btn">
        <img src={searchLogo} alt="search" className="searchBlock_btn__img" />
      </button>
    );
  }
}

export default SearchBtn;

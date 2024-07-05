import { Component } from 'react';
import searchLogo from '../../assets/svg/btn-search.svg';

interface SearchBtnProps {
  onClick: () => void;
}

class SearchBtn extends Component<SearchBtnProps> {
  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
  };

  render() {
    return (
      <button className="searchBlock_btn" onClick={this.handleClick}>
        <img src={searchLogo} alt="search" className="searchBlock_btn__img" />
      </button>
    );
  }
}

export default SearchBtn;

import { Component } from 'react';
import SearchInput from './SearchInput';
import './SearchBlock.scss';
import SearchBtn from './SearchBtn';

class SearchBlock extends Component {
  render() {
    return (
      <div className="searchBlock">
        <SearchInput />
        <SearchBtn />
      </div>
    );
  }
}

export default SearchBlock;

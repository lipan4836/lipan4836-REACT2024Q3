import { Component } from 'react';
import SearchInput from './SearchInput';
import './SearchBlock.scss';
import SearchBtn from './SearchBtn';

interface SearchBlockProps {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  onSearch: () => void;
}

class SearchBlock extends Component<SearchBlockProps> {
  render() {
    return (
      <div className="searchBlock">
        <SearchInput
          setSearchQuery={this.props.setSearchQuery}
          searchQuery={this.props.searchQuery}
          onSearch={this.props.onSearch}
        />
        <SearchBtn onClick={this.props.onSearch} />
      </div>
    );
  }
}

export default SearchBlock;

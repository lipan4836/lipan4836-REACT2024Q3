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
    const { onSearch, setSearchQuery, searchQuery } = this.props;
    return (
      <div className="searchBlock">
        <SearchInput
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          onSearch={onSearch}
        />
        <SearchBtn onClick={onSearch} />
      </div>
    );
  }
}

export default SearchBlock;

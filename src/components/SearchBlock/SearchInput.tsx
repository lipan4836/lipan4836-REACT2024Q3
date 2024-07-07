import { ChangeEvent, Component } from 'react';
import './SearchBlock.scss';

interface SearchInputProps {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  onSearch: () => void;
}

class SearchInput extends Component<SearchInputProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();
    this.props.setSearchQuery(trimmedValue);
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const trimmedValue = event.currentTarget.value.trim();
      this.props.setSearchQuery(trimmedValue);
      this.props.onSearch();
    }
  };

  render() {
    return (
      <input
        type="search"
        className="searchBlock_input"
        value={this.props.searchQuery}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default SearchInput;

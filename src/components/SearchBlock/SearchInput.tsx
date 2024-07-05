import { ChangeEvent, Component } from 'react';
import './SearchBlock.scss';

interface SearchInputProps {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  onSearch: () => void;
}

class SearchInput extends Component<SearchInputProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setSearchQuery(event.target.value);
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
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
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default SearchInput;

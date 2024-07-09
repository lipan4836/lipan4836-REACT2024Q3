import { ChangeEvent } from 'react';
import './SearchBlock.scss';

interface SearchInputProps {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  onSearch: () => void;
}

function SearchInput({ setSearchQuery, searchQuery, onSearch }: SearchInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();
    setSearchQuery(trimmedValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const trimmedValue = event.currentTarget.value.trim();
      setSearchQuery(trimmedValue);
      onSearch();
    }
  };

  return (
    <input
      type="search"
      className="searchBlock_input"
      value={searchQuery}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default SearchInput;

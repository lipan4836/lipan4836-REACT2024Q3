import { ChangeEvent } from 'react';
import './SearchBlock.scss';
import useAppContext from '../AppContext/useAppContext';

function SearchInput() {
  const { setSearchQuery, searchQuery, handleSearch } = useAppContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange called with value:', event.target.value);
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
      handleSearch();
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

import { ChangeEvent } from 'react';
import './SearchBlock.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksRedux';
import { setSearchQuery, setTriggerSearch } from '../../store/slices/searchSlice';

function SearchInput() {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.search.searchQuery);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setTriggerSearch(true));
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

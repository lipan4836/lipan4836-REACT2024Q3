import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';
import useAppContext from '../AppContext/useAppContext';

jest.mock('../AppContext/useAppContext');

describe('SearchInput component', () => {
  const setSearchQuery = jest.fn();
  const handleSearch = jest.fn();

  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({
      setSearchQuery,
      searchQuery: '',
      handleSearch,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the search input field', () => {
    render(<SearchInput />);
    const input = screen.getByRole('searchbox');
    expect(input).toBeInTheDocument();
  });

  it('calls setSearchQuery on input change', () => {
    render(<SearchInput />);
    const input = screen.getByRole('searchbox');

    fireEvent.change(input, { target: { value: 'test query' } });
    expect(setSearchQuery).toHaveBeenCalledWith('test query');
  });

  it('calls handleSearch on Enter key press', () => {
    render(<SearchInput />);
    const input = screen.getByRole('searchbox');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(handleSearch).toHaveBeenCalled();
  });

  it('does not call handleSearch on non-Enter key press', () => {
    render(<SearchInput />);
    const input = screen.getByRole('searchbox');

    fireEvent.keyDown(input, { key: 'a', code: 'KeyA' });
    expect(handleSearch).not.toHaveBeenCalled();
  });
});

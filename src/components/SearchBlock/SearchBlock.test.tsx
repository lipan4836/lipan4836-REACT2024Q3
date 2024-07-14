import { fireEvent, render, screen } from '@testing-library/react';
import SearchBlock from './SearchBlock';
import useAppContext from '../AppContext/useAppContext';

jest.mock('../AppContext/useAppContext');

describe('SearchBlock component', () => {
  let mockSetSearchQuery: jest.Mock;

  beforeEach(() => {
    mockSetSearchQuery = jest.fn();
    (useAppContext as jest.Mock).mockReturnValue({
      setSearchQuery: mockSetSearchQuery,
      searchQuery: '',
      handleSearch: jest.fn(),
    });
  });

  test('clicking the Search button saves the entered value to local storage', () => {
    const mockSearchValue = 'Naruto';

    render(<SearchBlock />);

    fireEvent.change(screen.getByRole('searchbox'), { target: { value: mockSearchValue } });
    fireEvent.click(screen.getByRole('button', { name: 'search' }));

    expect(mockSetSearchQuery).toHaveBeenCalledWith(mockSearchValue);
  });
});

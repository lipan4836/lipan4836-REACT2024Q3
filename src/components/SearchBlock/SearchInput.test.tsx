import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { setSearchQuery, setTriggerSearch } from '../../store/slices/searchSlice';
import SearchInput from './SearchInput';

const mockStore = configureStore([]);

describe('SearchInput', () => {
  const store = mockStore({
    search: {
      searchQuery: '',
    },
  });

  beforeEach(() => {
    store.dispatch = jest.fn();
  });

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>,
    );

  test('should render input field', () => {
    renderComponent();
    const input = screen.getByRole('searchbox');
    expect(input).toBeInTheDocument();
  });

  test('should dispatch setSearchQuery action on input change', () => {
    renderComponent();
    const input = screen.getByRole('searchbox');
    const searchText = 'Naruto';

    fireEvent.change(input, { target: { value: searchText } });

    expect(store.dispatch).toHaveBeenCalledWith(setSearchQuery(searchText));
  });

  test('should dispatch setTriggerSearch action on Enter key press', () => {
    renderComponent();
    const input = screen.getByRole('searchbox');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(store.dispatch).toHaveBeenCalledWith(setTriggerSearch(true));
  });
});

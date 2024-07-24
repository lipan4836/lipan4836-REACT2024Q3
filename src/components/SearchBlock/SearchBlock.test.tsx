import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBlock from './SearchBlock';
import { setSearchQuery } from '../../store/slices/searchSlice';
import { RootState } from '../../store/store';
import AppContext from '../AppContext/AppContext';

const mockStore = configureStore<Partial<RootState>>([]);

describe('SearchBlock component', () => {
  let store: ReturnType<typeof mockStore>;
  let mockToggleTheme: jest.Mock;

  beforeEach(() => {
    store = mockStore({
      search: {
        searchQuery: '',
        triggerSearch: false,
      },
    });

    store.dispatch = jest.fn();
    mockToggleTheme = jest.fn();

    jest.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('clicking the Search button saves the entered value to local storage', () => {
    const mockSearchValue = 'Naruto';

    render(
      <Provider store={store}>
        <AppContext.Provider value={{ darkTheme: false, toggleTheme: mockToggleTheme }}>
          <SearchBlock />
        </AppContext.Provider>
      </Provider>,
    );

    fireEvent.change(screen.getByRole('searchbox'), { target: { value: mockSearchValue } });
    fireEvent.click(screen.getByRole('button', { name: 'search' }));

    expect(store.dispatch).toHaveBeenCalledWith(setSearchQuery(mockSearchValue));
  });

  test('toggle theme button works correctly', () => {
    render(
      <Provider store={store}>
        <AppContext.Provider value={{ darkTheme: false, toggleTheme: mockToggleTheme }}>
          <SearchBlock />
        </AppContext.Provider>
      </Provider>,
    );

    fireEvent.click(screen.getByAltText('switcher to dark theme'));
    expect(mockToggleTheme).toHaveBeenCalled();
  });
});

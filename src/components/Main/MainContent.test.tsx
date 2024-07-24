import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainContent from './MainContent';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useFetchCharactersQuery } from '../../store/slices/apiSlice';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AppProvider from '../AppContext/AppProvider';

const mockStore = configureStore();

jest.mock('../../store/slices/apiSlice', () => ({
  useFetchCharactersQuery: jest.fn(),
}));

describe('MainContent component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      search: {
        searchQuery: '',
        triggerSearch: false,
      },
      selectedItems: {
        selectedItems: [],
      },
      page: {
        currentPage: 1,
      },
    });

    (useFetchCharactersQuery as jest.Mock).mockReset();
  });

  test('renders the specified number of cards', async () => {
    const mockResponse = {
      characters: [
        {
          id: 1,
          name: 'Character 1',
          images: [],
          jutsu: [],
          personal: { sex: 'male' },
          rank: { ninjaRank: {} },
        },
        {
          id: 2,
          name: 'Character 2',
          images: [],
          jutsu: [],
          personal: { sex: 'female' },
          rank: { ninjaRank: {} },
        },
        {
          id: 3,
          name: 'Character 3',
          images: [],
          jutsu: [],
          personal: { sex: 'male' },
          rank: { ninjaRank: {} },
        },
        {
          id: 4,
          name: 'Character 4',
          images: [],
          jutsu: [],
          personal: { sex: 'female' },
          rank: { ninjaRank: {} },
        },
        {
          id: 5,
          name: 'Character 5',
          images: [],
          jutsu: [],
          personal: { sex: 'male' },
          rank: { ninjaRank: {} },
        },
        {
          id: 6,
          name: 'Character 6',
          images: [],
          jutsu: [],
          personal: { sex: 'female' },
          rank: { ninjaRank: {} },
        },
      ],
      currentPage: 1,
      pageSize: 6,
      total: 6,
    };

    (useFetchCharactersQuery as jest.Mock).mockReturnValue({
      data: mockResponse,
      error: null,
      isLoading: false,
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <AppProvider>
            <MemoryRouter initialEntries={['/page/1']}>
              <Routes>
                <Route path="page/:pageId" element={<MainContent />} />
              </Routes>
            </MemoryRouter>
          </AppProvider>
        </Provider>,
      );
    });

    await waitFor(() => {
      expect(useFetchCharactersQuery).toHaveBeenCalledTimes(2);
      expect(screen.getAllByRole('article')).toHaveLength(mockResponse.characters.length);
    });
  });

  test('displays an appropriate message if no cards are present', async () => {
    const mockResponse = {
      characters: [],
      currentPage: 1,
      pageSize: 0,
      total: 0,
    };

    (useFetchCharactersQuery as jest.Mock).mockReturnValue({
      data: mockResponse,
      error: null,
      isLoading: false,
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <AppProvider>
            <MemoryRouter initialEntries={['/page/1']}>
              <Routes>
                <Route path="page/:pageId" element={<MainContent />} />
              </Routes>
            </MemoryRouter>
          </AppProvider>
        </Provider>,
      );
    });

    await waitFor(() => {
      expect(useFetchCharactersQuery).toHaveBeenCalledTimes(2);
      expect(
        screen.getByText(/Sorry, but there is no such character in the Naruto universe./i),
      ).toBeInTheDocument();
    });
  });

  test('displays loader when data is loading', async () => {
    (useFetchCharactersQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <AppProvider>
            <MemoryRouter initialEntries={['/page/1']}>
              <Routes>
                <Route path="page/:pageId" element={<MainContent />} />
              </Routes>
            </MemoryRouter>
          </AppProvider>
        </Provider>,
      );
    });

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('displays error message when there is an error', async () => {
    const mockError = new Error('Failed to fetch data');

    (useFetchCharactersQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: mockError,
      isLoading: false,
    });

    await act(async () => {
      render(
        <Provider store={store}>
          <AppProvider>
            <MemoryRouter initialEntries={['/page/1']}>
              <Routes>
                <Route path="page/:pageId" element={<MainContent />} />
              </Routes>
            </MemoryRouter>
          </AppProvider>
        </Provider>,
      );
    });

    expect(screen.getByText(/Error: Failed to fetch data/i)).toBeInTheDocument();
  });
});

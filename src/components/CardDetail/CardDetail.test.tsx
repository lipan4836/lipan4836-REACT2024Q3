import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CardDetail from './CardDetail';
import { useFetchCharacterByIdQuery } from '../../store/slices/apiSlice';
import AppProvider from '../AppContext/AppProvider';

jest.mock('../../store/slices/apiSlice');

const mockStore = configureStore([]);
const store = mockStore({});

const mockCharacter = {
  id: 1,
  name: 'Naruto Uzumaki',
  images: ['https://example.com/naruto.jpg'],
  personal: { sex: 'male' },
  debut: { anime: 'Episode 1' },
  jutsu: ['Shadow Clone'],
  rank: { ninjaRank: { genin: 'Genin' } },
};

describe('CardDetail component', () => {
  beforeEach(() => {
    (useFetchCharacterByIdQuery as jest.Mock).mockClear();
  });

  test('displays loading indicator while fetching data', async () => {
    (useFetchCharacterByIdQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(
      <Provider store={store}>
        <AppProvider>
          <MemoryRouter initialEntries={['/details/1']}>
            <Routes>
              <Route path="/details/:id" element={<CardDetail />} />
            </Routes>
          </MemoryRouter>
        </AppProvider>
      </Provider>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('renders character details after data is fetched', async () => {
    (useFetchCharacterByIdQuery as jest.Mock).mockReturnValue({
      data: mockCharacter,
      error: undefined,
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <AppProvider>
          <MemoryRouter initialEntries={['/details/1']}>
            <Routes>
              <Route path="/details/:id" element={<CardDetail />} />
            </Routes>
          </MemoryRouter>
        </AppProvider>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).toBeNull();
    });

    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByText(`Anime: ${mockCharacter.debut.anime}`)).toBeInTheDocument();
  });

  test('displays error message if there is an error fetching data', async () => {
    const errorMessage = 'Failed to fetch character';
    (useFetchCharacterByIdQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: { toString: () => errorMessage },
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <AppProvider>
          <MemoryRouter initialEntries={['/details/1']}>
            <Routes>
              <Route path="/details/:id" element={<CardDetail />} />
            </Routes>
          </MemoryRouter>
        </AppProvider>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).toBeNull();
    });

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  test('closes the component when clicking close button', async () => {
    (useFetchCharacterByIdQuery as jest.Mock).mockReturnValue({
      data: mockCharacter,
      error: undefined,
      isLoading: false,
    });

    const { container } = render(
      <Provider store={store}>
        <AppProvider>
          <MemoryRouter initialEntries={['/details/1']}>
            <Routes>
              <Route path="/details/:id" element={<CardDetail />} />
            </Routes>
          </MemoryRouter>
        </AppProvider>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).toBeNull();
    });

    fireEvent.click(container.querySelector('.closePage')!);

    expect(container.innerHTML).not.toContain(mockCharacter.name);
  });
});

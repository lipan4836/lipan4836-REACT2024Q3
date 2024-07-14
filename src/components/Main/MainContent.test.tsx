import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainContent from './MainContent';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { fetchData } from '../../api/api';
import AppProvider from '../AppContext/AppProvider';

jest.mock('../../api/api');

const mockedFetchData = fetchData as jest.MockedFunction<typeof fetchData>;

describe('MainContent component', () => {
  beforeEach(() => {
    mockedFetchData.mockClear();
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

    mockedFetchData.mockResolvedValueOnce(mockResponse);

    await act(async () => {
      render(
        <AppProvider>
          <MemoryRouter initialEntries={['/page/1']}>
            <Routes>
              <Route path="page/:pageId" element={<MainContent />} />
            </Routes>
          </MemoryRouter>
        </AppProvider>,
      );
    });

    await waitFor(() => {
      expect(mockedFetchData).toHaveBeenCalledTimes(1);
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

    mockedFetchData.mockResolvedValueOnce(mockResponse);

    await act(async () => {
      render(
        <AppProvider>
          <MemoryRouter initialEntries={['/page/1']}>
            <Routes>
              <Route path="page/:pageId" element={<MainContent />} />
            </Routes>
          </MemoryRouter>
        </AppProvider>,
      );
    });

    await waitFor(() => {
      expect(mockedFetchData).toHaveBeenCalledTimes(1);
      expect(
        screen.getByText(/Sorry, but there is no such character in the Naruto universe./i),
      ).toBeInTheDocument();
    });
  });
});

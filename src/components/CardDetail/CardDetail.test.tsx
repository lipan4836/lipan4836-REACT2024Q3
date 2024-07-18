import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CardDetail from './CardDetail';
import { fetchDataById } from '../../api/api';
import AppProvider from '../AppContext/AppProvider';

jest.mock('../../api/api');

const mockedFetchDataById = fetchDataById as jest.MockedFunction<typeof fetchDataById>;

describe('CardDetail component', () => {
  beforeEach(() => {
    mockedFetchDataById.mockClear();
  });

  test('displays loading indicator while fetching data', async () => {
    const mockCharacter = {
      id: 1,
      name: 'Naruto Uzumaki',
      images: [],
      personal: { sex: 'male' },
      debut: { anime: 'Episode 1' },
      jutsu: ['Shadow Clone'],
      rank: { ninjaRank: { genin: 'Genin' } },
    };

    mockedFetchDataById.mockResolvedValueOnce(mockCharacter);

    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
            <Route path="/details/:id" element={<CardDetail />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).toBeNull();
    });

    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByText(`Anime: ${mockCharacter.debut.anime}`)).toBeInTheDocument();
  });

  test('closes the component when clicking close button', async () => {
    const mockCharacter = {
      id: 1,
      name: 'Naruto Uzumaki',
      images: [],
      personal: { sex: 'male' },
      debut: { anime: 'Episode 1' },
      jutsu: ['Shadow Clone'],
      rank: { ninjaRank: { genin: 'Genin' } },
    };

    mockedFetchDataById.mockResolvedValueOnce(mockCharacter);

    const { container } = render(
      <AppProvider>
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
            <Route path="/details/:id" element={<CardDetail />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).toBeNull();
    });

    fireEvent.click(container.querySelector('.closePage')!);

    expect(container.innerHTML).not.toContain(mockCharacter.name);
  });
});

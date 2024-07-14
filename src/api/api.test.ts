import { CharacterResponse, Character } from '../types/characterResponse';
import { fetchData, fetchDataById } from './api';
import fetchMock from 'jest-fetch-mock';

describe('API fetch functions', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('fetchData successfully fetches data', async () => {
    const mockResponse: CharacterResponse = {
      characters: [
        {
          id: 1,
          name: 'Foolruto',
          images: [],
          jutsu: [],
          personal: { sex: 'male' },
          rank: { ninjaRank: {} },
        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 100,
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await fetchData(1, 10);
    expect(result).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://dattebayo-api.onrender.com/characters?page=1&limit=10',
    );
  });

  test('fetchData throws an error when the response is not ok', async () => {
    fetchMock.mockResponseOnce('', { status: 500 });

    await expect(fetchData(1, 10)).rejects.toThrow('Something gone wrong!!\nStatus: 500');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test('fetchDataById successfully fetches data', async () => {
    const mockCharacter: Character = {
      id: 1,
      name: 'Foolruto',
      images: [],
      jutsu: [],
      personal: { sex: 'male' },
      rank: { ninjaRank: {} },
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockCharacter));

    const result = await fetchDataById(1);
    expect(result).toEqual(mockCharacter);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('https://dattebayo-api.onrender.com/characters/1');
  });

  test('fetchDataById throws an error when the response is not ok', async () => {
    fetchMock.mockResponseOnce('', { status: 404 });

    await expect(fetchDataById(1)).rejects.toThrow('Something gone wrong!!\nStatus: 404');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

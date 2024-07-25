import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, CharacterResponse } from '../../types/characterResponse';

const baseApiUrl = 'https://dattebayo-api.onrender.com/characters';

const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  endpoints: (builder) => ({
    fetchCharacters: builder.query<
      CharacterResponse,
      { page: number; limit: number; searchQuery?: string }
    >({
      query: ({ page, limit, searchQuery }) => {
        let url = `?page=${page}&limit=${limit}`;
        if (searchQuery) {
          url += `&name=${searchQuery}`;
        }
        return url;
      },
    }),

    fetchCharacterById: builder.query<Character, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useFetchCharactersQuery, useFetchCharacterByIdQuery } = apiService;
export default apiService;

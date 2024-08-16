import { createSlice } from '@reduxjs/toolkit';

interface CountryState {
  list: string[];
}

const initialState: CountryState = {
  list: [
    'Russia',
    'Belarus',
    'Poland',
    'Kazakhstan',
    'USA',
    'Canada',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Japan',
    'Australia',
    'China',
    'India',
    'Brazil',
    'Mexico',
    'Argentina',
    'Turkey',
    'Egypt',
    'China',
  ],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;

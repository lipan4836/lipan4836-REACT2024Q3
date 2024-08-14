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
    'United States',
    'Canada',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'United Kingdom',
    'Japan',
    'Australia',
    'China',
    'India',
    'Brazil',
    'South Africa',
    'Mexico',
    'Argentina',
    'Turkey',
    'Egypt',
  ],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;

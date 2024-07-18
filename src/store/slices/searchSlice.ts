import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchQuery: string;
  triggerSearch: boolean;
}

const initialState: SearchState = {
  searchQuery: localStorage.getItem('searchQuery') || '',
  triggerSearch: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      localStorage.setItem('searchQuery', action.payload);
    },

    setTriggerSearch(state, action: PayloadAction<boolean>) {
      state.triggerSearch = action.payload;
    },

    handleSearch(state) {
      state.triggerSearch = true;
    },

    resetTriggerSearch(state) {
      state.triggerSearch = false;
    },
  },
});

export const { setSearchQuery, setTriggerSearch, handleSearch, resetTriggerSearch } =
  searchSlice.actions;
export default searchSlice.reducer;

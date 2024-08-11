import { createSlice } from '@reduxjs/toolkit';

interface ThemeSlice {
  darkTheme: boolean;
}

const initialState: ThemeSlice = {
  darkTheme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;
    },

    setDarkTheme(state, action) {
      state.darkTheme = action.payload;
    },
  },
});

export const { toggleTheme, setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../types/characterResponse';

interface SelectedItemsState {
  selectedItems: Character[];
}

const initialState: SelectedItemsState = {
  selectedItems: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Character>) {
      if (!state.selectedItems.some((item) => item.id === action.payload.id)) {
        state.selectedItems.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.selectedItems = state.selectedItems.filter((item) => item.id !== action.payload);
    },
    removeAllItems(state) {
      state.selectedItems = [];
    },
  },
});

export const { addItem, removeItem, removeAllItems } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;

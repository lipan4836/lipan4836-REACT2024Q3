import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../types/characterResponse'; // Импортируйте тип Character

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

    setSelectedItems(state, action: PayloadAction<Character[]>) {
      state.selectedItems = action.payload;
    },

    removeAllItems(state) {
      state.selectedItems = [];
    },
  },
});

export const { addItem, removeItem, setSelectedItems, removeAllItems } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedItemsState {
  selectedItems: number[];
}

const initialState: SelectedItemsState = {
  selectedItems: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<number>) {
      if (!state.selectedItems.includes(action.payload)) {
        state.selectedItems.push(action.payload);
      }
    },

    removeItem(state, action: PayloadAction<number>) {
      state.selectedItems = state.selectedItems.filter((id) => id !== action.payload);
    },

    setSelectedItems(state, action: PayloadAction<number[]>) {
      state.selectedItems = action.payload;
    },

    removeAllItems(state) {
      state.selectedItems = [];
    },
  },
});

export const { addItem, removeItem, setSelectedItems, removeAllItems } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;

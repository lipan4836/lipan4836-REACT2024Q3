import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValuesProps } from '../../types/formValuesProps';

interface FormState {
  submissions: FormValuesProps[];
  lastAddedTimestamp: number | null;
}

const initialState: FormState = {
  submissions: [],
  lastAddedTimestamp: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<FormValuesProps>) {
      state.submissions.push(action.payload);
      state.lastAddedTimestamp = Date.now();
    },
  },
});

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;

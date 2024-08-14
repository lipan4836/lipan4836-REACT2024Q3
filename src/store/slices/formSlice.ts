import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValuesProps } from '../../types/formValuesProps';

interface FormState {
  currentData: FormValuesProps;
  previousData: FormValuesProps | null;
}

const initialState: FormState = {
  currentData: {
    name: '',
    age: '',
    email: '',
    pass1: '',
    pass2: '',
    gender: null,
    agreement: false,
    country: '',
    imageBase64: null,
  },
  previousData: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormValuesProps>) {
      state.previousData = { ...state.currentData };
      state.currentData = { ...action.payload };
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;

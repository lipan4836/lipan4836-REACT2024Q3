import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormValuesProps } from '../../types/formValuesProps';

const initialState: FormValuesProps = {
  name: '',
  age: '',
  email: '',
  pass1: '',
  pass2: '',
  gender: null,
  agreement: false,
  country: '',
  imageBase64: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormValuesProps>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;

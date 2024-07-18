import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import pageReducer from './slices/pageSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    page: pageReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { RootState, AppDispatch };

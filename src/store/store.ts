import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import pageReducer from './slices/pageSlice';
import apiService from './slices/apiSlice';
import selectedItemsReducer from './slices/selectedItemsSlice';

const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    selectedItems: selectedItemsReducer,
    search: searchReducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { RootState, AppDispatch };

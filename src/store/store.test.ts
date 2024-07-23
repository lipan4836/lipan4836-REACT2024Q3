import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import pageReducer from './slices/pageSlice';
import apiService from './slices/apiSlice';
import selectedItemsReducer from './slices/selectedItemsSlice';

describe('Redux Store Configuration', () => {
  it('should create a store with the correct reducers and middleware', () => {
    const store = configureStore({
      reducer: {
        [apiService.reducerPath]: apiService.reducer,
        selectedItems: selectedItemsReducer,
        search: searchReducer,
        page: pageReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
    });

    const state = store.getState();

    expect(state).toHaveProperty(apiService.reducerPath);
    expect(state).toHaveProperty('selectedItems');
    expect(state).toHaveProperty('search');
    expect(state).toHaveProperty('page');

    type AppDispatch = typeof store.dispatch;

    const dispatch: AppDispatch = store.dispatch;
    expect(typeof dispatch).toBe('function');
  });
});

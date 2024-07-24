import { configureStore } from '@reduxjs/toolkit';
import searchReducer, { setTriggerSearch } from './slices/searchSlice';
import pageReducer, { setCurrentPage } from './slices/pageSlice';
import apiService from './slices/apiSlice';
import selectedItemsReducer, { addItem, removeAllItems } from './slices/selectedItemsSlice';
import { store, RootState } from './strore';

describe('Redux Store', () => {
  it('should configure the store with the correct reducers and middleware', () => {
    const testStore = configureStore({
      reducer: {
        [apiService.reducerPath]: apiService.reducer,
        selectedItems: selectedItemsReducer,
        search: searchReducer,
        page: pageReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
    });

    expect(testStore.getState()).toEqual(store.getState());
  });

  it('should handle actions correctly in searchSlice', () => {
    let state: RootState = store.getState();
    store.dispatch(setTriggerSearch(true));
    state = store.getState();
    expect(state.search.triggerSearch).toBe(true);
  });

  it('should handle actions correctly in pageSlice', () => {
    let state: RootState = store.getState();
    store.dispatch(setCurrentPage(2));
    state = store.getState();
    expect(state.page.currentPage).toBe(2);
  });

  it('should handle actions correctly in selectedItemsSlice', () => {
    const character = {
      id: 1,
      name: 'Character 1',
      images: [],
      jutsu: [],
      personal: { sex: 'male' },
      rank: { ninjaRank: {} },
    };
    let state: RootState = store.getState();
    store.dispatch(addItem(character));
    state = store.getState();
    expect(state.selectedItems.selectedItems).toContainEqual(character);

    store.dispatch(removeAllItems());
    state = store.getState();
    expect(state.selectedItems.selectedItems).toHaveLength(0);
  });
});

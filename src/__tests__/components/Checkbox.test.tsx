import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Checkbox from '../../components/Card/Checkbox/Checkbox';
import { addItem, removeItem } from '../../store/slices/selectedItemsSlice';
import { RootState, AppDispatch } from '../../store/store';
import { Character } from '../../types/characterResponse';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

const mockStore = configureStore<DeepPartial<RootState>, AppDispatch>([]);

describe('Checkbox component', () => {
  let store: ReturnType<typeof mockStore>;

  const character: Character = {
    id: 1,
    name: 'Character',
    images: ['https://example.com/naruto.jpg'],
    jutsu: ['some jutsu'],
    personal: {
      sex: 'alien',
    },
  };

  beforeEach(() => {
    store = mockStore({
      selectedItems: {
        selectedItems: [],
      },
    });

    store.dispatch = jest.fn();
  });

  test('renders the Checkbox component', () => {
    render(
      <Provider store={store}>
        <Checkbox character={character} />
      </Provider>,
    );

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('checkbox should be unchecked initially', () => {
    render(
      <Provider store={store}>
        <Checkbox character={character} />
      </Provider>,
    );

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).not.toBeChecked();
  });

  test('checkbox should be checked if character is selected', () => {
    store = mockStore({
      selectedItems: {
        selectedItems: [character],
      },
    });

    render(
      <Provider store={store}>
        <Checkbox character={character} />
      </Provider>,
    );

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeChecked();
  });

  test('dispatches addItem action when checkbox is checked', async () => {
    render(
      <Provider store={store}>
        <Checkbox character={character} />
      </Provider>,
    );

    const checkboxElement = screen.getByRole('checkbox');

    await userEvent.click(checkboxElement);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(addItem(character));
  });

  test('dispatches removeItem action when checkbox is unchecked', async () => {
    store = mockStore({
      selectedItems: {
        selectedItems: [character],
      },
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Checkbox character={character} />
      </Provider>,
    );

    const checkboxElement = screen.getByRole('checkbox');

    await userEvent.click(checkboxElement);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(removeItem(character.id));
  });

  test('handleCheckboxClick stops event propagation', async () => {
    const handleClick = jest.fn();

    render(
      <div onClick={handleClick}>
        <Provider store={store}>
          <Checkbox character={character} />
        </Provider>
      </div>,
    );

    const checkboxElement = screen.getByRole('checkbox');

    await userEvent.click(checkboxElement);

    expect(handleClick).not.toHaveBeenCalled();
  });
});

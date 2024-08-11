import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';
import { toggleTheme } from '../../store/slices/themeSlice';
import { RootState, AppDispatch } from '../../store/store';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

const mockStore = configureStore<DeepPartial<RootState>, AppDispatch>([]);

describe('ThemeBtn component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      theme: { darkTheme: false },
    });
    store.dispatch = jest.fn();
  });

  test('renders the ThemeBtn component', () => {
    render(
      <Provider store={store}>
        <ThemeBtn />
      </Provider>,
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders correct image based on the theme', () => {
    render(
      <Provider store={store}>
        <ThemeBtn />
      </Provider>,
    );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/btn-dark.svg');
    expect(imgElement).toHaveAttribute('alt', 'switcher to dark theme');
  });

  test('dispatches toggleTheme action on button click', () => {
    render(
      <Provider store={store}>
        <ThemeBtn />
      </Provider>,
    );

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(toggleTheme());
  });

  test('renders correct image when darkTheme is true', () => {
    store = mockStore({
      theme: { darkTheme: true },
    });

    render(
      <Provider store={store}>
        <ThemeBtn />
      </Provider>,
    );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/btn-light.svg');
    expect(imgElement).toHaveAttribute('alt', 'switcher to light theme');
  });
});

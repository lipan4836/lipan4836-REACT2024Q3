import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { removeAllItems } from '../../store/slices/selectedItemsSlice';
import { Character } from '../../types/characterResponse';
import { RootState } from '../../store/store';
import Flyout from '../../components/Flyout/Flyout';

const mockStore = configureStore<RootState>([]);

const mockCharacter: Character = {
  id: 1,
  name: 'Naruto Uzumaki',
  images: ['https://example.com/naruto.jpg'],
  personal: { birthdate: 'October 10', sex: 'male', clan: ['Uzumaki'] },
  jutsu: ['Shadow Clone'],
  rank: { ninjaRank: { genin: 'Genin' } },
};

const mockAnotherCharacter: Character = {
  id: 2,
  name: 'Hinata',
  images: ['https://example.com/hinata.jpg'],
  personal: { birthdate: 'October 10', sex: 'female', clan: ['Uzumaki'] },
  jutsu: ['Shadow Clone'],
  rank: { ninjaRank: { genin: 'Genin' } },
};

describe('Flyout component', () => {
  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore({
      selectedItems: {
        selectedItems: [mockCharacter],
      },
      theme: {
        darkTheme: false,
      },
    });

    store.dispatch = jest.fn();
  });

  test('renders Flyout component with one selected item', () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(screen.getByText('1 item is selected')).toBeInTheDocument();
  });

  test('renders Flyout component with multiple selected items', () => {
    store = mockStore({
      selectedItems: {
        selectedItems: [mockCharacter, mockAnotherCharacter],
      },
      theme: {
        darkTheme: false,
      },
    });

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(screen.getByText('2 items are selected')).toBeInTheDocument();
  });

  test('calls removeAllItems action on "Unselect all" button click', () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Unselect all'));

    expect(store.dispatch).toHaveBeenCalledWith(removeAllItems());
  });

  test('"Download" button click works', () => {
    URL.createObjectURL = jest.fn(() => 'mocked-url');

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    const downloadButton = screen.getByText('Download');
    fireEvent.click(downloadButton);

    const linkElement = screen.getByRole('link', { name: /download/i });
    expect(linkElement).toHaveAttribute('href', 'mocked-url');
    expect(linkElement).toHaveAttribute('download', '1_characters.csv');
  });

  test('handles dark theme correctly', () => {
    store = mockStore({
      selectedItems: {
        selectedItems: [mockCharacter],
      },
      theme: {
        darkTheme: true,
      },
    });

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    const unselectButton = screen.getByText('Unselect all');
    const downloadButton = screen.getByText('Download');

    expect(unselectButton).toHaveClass('dark_btn');
    expect(downloadButton).toHaveClass('dark_btn');
  });

  test('handles no selected items', () => {
    store = mockStore({
      selectedItems: {
        selectedItems: [],
      },
      theme: {
        darkTheme: false,
      },
    });

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(screen.getByText('0 items are selected')).toBeInTheDocument();
  });
});

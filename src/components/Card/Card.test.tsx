import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { Character } from '../../types/characterResponse';
import AppProvider from '../AppContext/AppProvider';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import useAppContext from '../AppContext/useAppContext';

const mockStore = configureStore([]);
const store = mockStore({
  selectedItems: {
    selectedItems: [],
  },
});

const mockCharacter: Character = {
  id: 1,
  name: 'Naruto Uzumaki',
  images: ['https://example.com/naruto.jpg'],
  jutsu: ['Shadow Clone'],
  personal: { sex: 'male' },
  rank: { ninjaRank: { genin: 'Genin' } },
};

const mockCharacterWithoutImage: Character = {
  ...mockCharacter,
  images: [],
};

jest.mock('../AppContext/useAppContext');

describe('Card component', () => {
  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({ darkTheme: false });
  });

  test('renders the relevant card data', () => {
    render(
      <Provider store={store}>
        <AppProvider>
          <Card character={mockCharacter} onClick={jest.fn()} />
        </AppProvider>
      </Provider>,
    );

    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockCharacter.name)).toHaveAttribute('src', mockCharacter.images[0]);
  });

  test('renders NoPhoto component if no images are present', () => {
    render(
      <Provider store={store}>
        <AppProvider>
          <Card character={mockCharacterWithoutImage} onClick={jest.fn()} />
        </AppProvider>
      </Provider>,
    );

    expect(screen.getByTestId('noPhotoComponent')).toBeInTheDocument();
    expect(screen.getByTestId('noPhotoComponent')).toHaveTextContent('No photo :(');
  });

  test('clicking on card triggers onClick function', () => {
    const handleClick = jest.fn();
    render(
      <Provider store={store}>
        <AppProvider>
          <Card character={mockCharacter} onClick={handleClick} />
        </AppProvider>
      </Provider>,
    );

    fireEvent.click(screen.getByRole('article'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders and interacts with Checkbox', () => {
    render(
      <Provider store={store}>
        <AppProvider>
          <Card character={mockCharacter} onClick={jest.fn()} />
        </AppProvider>
      </Provider>,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(store.getActions()).toEqual([{ type: 'selectedItems/addItem', payload: mockCharacter }]);
  });

  test('applies dark theme class when darkTheme is true', () => {
    (useAppContext as jest.Mock).mockReturnValue({ darkTheme: true });
    render(
      <Provider store={store}>
        <AppProvider>
          <Card character={mockCharacter} onClick={jest.fn()} />
        </AppProvider>
      </Provider>,
    );

    const article = screen.getByRole('article');
    expect(article).toHaveClass('charDark');
  });

  test('does not apply dark theme class when darkTheme is false', () => {
    (useAppContext as jest.Mock).mockReturnValue({ darkTheme: false });
    render(
      <Provider store={store}>
        <AppProvider>
          <Card character={mockCharacter} onClick={jest.fn()} />
        </AppProvider>
      </Provider>,
    );

    const article = screen.getByRole('article');
    expect(article).not.toHaveClass('charDark');
  });
});

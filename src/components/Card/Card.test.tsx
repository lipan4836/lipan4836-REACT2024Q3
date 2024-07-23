import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { Character } from '../../types/characterResponse';
import AppProvider from '../AppContext/AppProvider';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({
  selectedItems: {
    selectedItems: []
  }
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
  images: []
};

describe('Card component', () => {
  test('renders the relevant card data', () => {
    render(
      <Provider store={store}>
        <AppProvider>
          <Card character={mockCharacter} onClick={jest.fn()} />
        </AppProvider>
      </Provider>
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
      </Provider>
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
      </Provider>
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
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(store.getActions()).toEqual([{ type: 'selectedItems/addItem', payload: mockCharacter }]);
  });
});

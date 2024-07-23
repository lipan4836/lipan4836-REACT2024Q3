import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Checkbox from './Checkbox';
import { addItem, removeItem } from '../../../store/slices/selectedItemsSlice';
import { Character } from '../../../types/characterResponse';
import { RootState } from '../../../store/strore';

const mockStore = configureStore<Partial<RootState>>([]);

const character: Character = {
  id: 1,
  name: 'Pupa',
  images: ['test-image.jpg'],
  family: {
    father: 'Father',
    mother: 'Mother',
    brother: 'Brother',
    sister: 'Sister',
  },
  jutsu: ['Jutsu 1', 'Jutsu 2'],
  natureType: ['Test Nature Type'],
  personal: {
    birthdate: 'January 1',
    sex: 'Male',
    bloodType: 'O',
  },
  tools: ['Tool 1', 'Tool 2'],
  voiceActors: {
    japanese: 'Japanese Voice Actor',
    english: 'English Voice Actor',
  },
};

describe('Checkbox Component', () => {
  let store: MockStoreEnhanced<Partial<RootState>>;

  beforeEach(() => {
    store = mockStore({
      selectedItems: {
        selectedItems: [],
      },
    });
  });

  const renderComponent = (store: MockStoreEnhanced<Partial<RootState>>) => {
    return render(
      <Provider store={store}>
        <Checkbox character={character} />
      </Provider>,
    );
  };

  test('renders checkbox', () => {
    renderComponent(store);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('checkbox is checked when item is selected', () => {
    store = mockStore({
      selectedItems: {
        selectedItems: [character],
      },
    });

    renderComponent(store);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('checkbox is not checked when item is not selected', () => {
    renderComponent(store);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  test('dispatches addItem action when checkbox is checked', () => {
    renderComponent(store);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(store.getActions()).toContainEqual(addItem(character));
  });

  test('dispatches removeItem action when checkbox is unchecked', () => {
    store = mockStore({
      selectedItems: {
        selectedItems: [character],
      },
    });

    renderComponent(store);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(store.getActions()).toContainEqual(removeItem(character.id));
  });
});

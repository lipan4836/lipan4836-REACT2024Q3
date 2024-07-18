import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { Character } from '../../types/characterResponse';
import AppProvider from '../AppContext/AppProvider';

const mockCharacter: Character = {
  id: 1,
  name: 'Naruto Uzumaki',
  images: ['https://example.com/naruto.jpg'],
  jutsu: ['Shadow Clone'],
  personal: { sex: 'male' },
  rank: { ninjaRank: { genin: 'Genin' } },
};

describe('Card component', () => {
  test('renders the relevant card data', () => {
    render(
      <AppProvider>
        <Card character={mockCharacter} onClick={jest.fn()} />
      </AppProvider>,
    );

    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockCharacter.name)).toHaveAttribute('src', mockCharacter.images[0]);
  });

  test('renders NoPhoto component if no images are present', () => {
    const mockCharacterWithoutImage = { ...mockCharacter, images: [] };
    render(
      <AppProvider>
        <Card character={mockCharacterWithoutImage} onClick={jest.fn()} />
      </AppProvider>,
    );

    expect(screen.getByTestId('noPhotoComponent')).toBeInTheDocument();
    expect(screen.getByTestId('noPhotoComponent')).toHaveTextContent('No photo :(');
  });

  test('clicking on card triggers onClick function', () => {
    const handleClick = jest.fn();
    render(
      <AppProvider>
        <Card character={mockCharacter} onClick={handleClick} />
      </AppProvider>,
    );

    fireEvent.click(screen.getByRole('article'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { Character } from '../../types/characterResponse';

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
    render(<Card character={mockCharacter} onClick={jest.fn()} />);

    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockCharacter.name)).toHaveAttribute('src', mockCharacter.images[0]);
  });

  test('renders NoPhoto component if no images are present', () => {
    const mockCharacterWithoutImage = { ...mockCharacter, images: [] };
    render(<Card character={mockCharacterWithoutImage} onClick={jest.fn()} />);

    expect(screen.getByTestId('noPhotoComponent')).toBeInTheDocument();
    expect(screen.getByTestId('noPhotoComponent')).toHaveTextContent('No photo :(');
  });

  test('clicking on card triggers onClick function', () => {
    const handleClick = jest.fn();
    render(<Card character={mockCharacter} onClick={handleClick} />);

    fireEvent.click(screen.getByRole('article'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

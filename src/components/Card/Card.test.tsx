import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useAppSelector } from '../../hooks/hooksRedux';
import Card from './Card';
import { Character } from '../../types/characterResponse';

jest.mock('../../hooks/hooksRedux', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('./Checkbox/Checkbox', () => () => <div data-testid="checkbox">Mocked Checkbox</div>);
jest.mock('../NoPhoto/NoPhoto', () => () => <div data-testid="no-photo">No Photo Available</div>);

describe('Card component', () => {
  const mockCharacter: Character = {
    id: 1,
    name: 'Test Character',
    images: ['test-image.jpg'],
    jutsu: ['some jutsu'],
    personal: {
      sex: 'male',
    },
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders character name', () => {
    render(<Card character={mockCharacter} onClick={mockOnClick} />);
    expect(screen.getByText('Test Character')).toBeInTheDocument();
  });

  it('renders image if images exist', () => {
    render(<Card character={mockCharacter} onClick={mockOnClick} />);
    expect(screen.getByAltText('Test Character')).toHaveAttribute('src', 'test-image.jpg');
  });

  it('renders NoPhoto if images do not exist', () => {
    const characterWithoutImage = { ...mockCharacter, images: [] };
    render(<Card character={characterWithoutImage} onClick={mockOnClick} />);
    expect(screen.getByTestId('no-photo')).toBeInTheDocument();
  });

  it('applies correct class based on theme', () => {
    (useAppSelector as jest.Mock).mockReturnValue(true); // темная тема
    render(<Card character={mockCharacter} onClick={mockOnClick} />);
    expect(screen.getByRole('article')).toHaveClass('charDark');
  });

  it('calls onClick when card is clicked', () => {
    render(<Card character={mockCharacter} onClick={mockOnClick} />);
    fireEvent.click(screen.getByRole('article'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders Checkbox component', () => {
    render(<Card character={mockCharacter} onClick={mockOnClick} />);
    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
  });
});

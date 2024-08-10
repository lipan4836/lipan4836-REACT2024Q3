import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { Character } from '../../types/characterResponse';
import Card from '../../components/Card/Card';
import { store } from '../../store/store';

const mockCharacter: Character = {
  id: 1,
  name: 'Character',
  images: ['https://example.com/naruto.jpg'],
  jutsu: ['some jutsu'],
  personal: {
    sex: 'alien',
  },
};

describe('Card Component', () => {
  it('renders the character name and image', () => {
    render(
      <Provider store={store}>
        <Card character={mockCharacter} onClick={jest.fn()} />
      </Provider>,
    );

    const characterName = screen.getByText(/Character/i);
    const characterImage = screen.getByAltText(/Character/i);

    expect(characterName).toBeInTheDocument();
    expect(characterImage).toBeInTheDocument();
  });

  it('calls the onClick handler when the card is clicked', async () => {
    const handleClick = jest.fn();

    render(
      <Provider store={store}>
        <Card character={mockCharacter} onClick={handleClick} />
      </Provider>,
    );

    const cardElement = screen.getByRole('article');

    await userEvent.click(cardElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders NoPhoto component if no images are provided', () => {
    const characterWithoutImages = { ...mockCharacter, images: [] };

    render(
      <Provider store={store}>
        <Card character={characterWithoutImages} onClick={jest.fn()} />
      </Provider>,
    );

    const noPhotoElement = screen.getByTestId('noPhotoComponent');
    expect(noPhotoElement).toBeInTheDocument();
  });
});

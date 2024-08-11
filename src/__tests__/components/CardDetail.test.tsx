import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';
import { Character } from '../../types/characterResponse';
import CardDetail from '../../components/CardDetail/CardDetail';
import useOutsideClick from '../../hooks/useOutsideClick';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/image', () => (props: JSX.IntrinsicElements['img']) => <img {...props} />);

jest.mock('../../hooks/useOutsideClick', () => jest.fn());

describe('CardDetail', () => {
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { page: '1', searchQuery: 'Naruto' },
      push: mockRouterPush,
    });
  });

  const character: Character = {
    id: 1,
    name: 'Naruto Uzumaki',
    images: ['/naruto.png'],
    jutsu: ['jutsu'],
    personal: {
      birthdate: 'October 10',
      sex: 'Male',
      clan: ['Uzumaki'],
    },
    debut: {
      anime: 'Naruto',
      manga: 'Naruto',
      novel: '',
      game: 'Naruto: Ultimate Ninja',
    },
  };

  it('renders character details correctly', () => {
    render(<CardDetail character={character} />);

    expect(screen.getByText('Naruto Uzumaki')).toBeInTheDocument();
    expect(screen.getByText('October 10')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Uzumaki')).toBeInTheDocument();
    expect(screen.getByAltText('Naruto Uzumaki')).toBeInTheDocument();
  });

  it('closes the detail page when the close button is clicked', async () => {
    render(<CardDetail character={character} />);

    const closeButton = screen.getByRole('button', { name: /close details/i });
    await userEvent.click(closeButton);

    expect(mockRouterPush).toHaveBeenCalledWith({
      pathname: `/page/1`,
      query: { searchQuery: 'Naruto' },
    });
  });

  it('closes the detail page when clicking outside', () => {
    const outsideClickHandler = (useOutsideClick as jest.Mock).mock.calls[0][1] as () => void;

    render(<CardDetail character={character} />);
    outsideClickHandler();

    expect(mockRouterPush).toHaveBeenCalledWith({
      pathname: `/page/1`,
      query: { searchQuery: 'Naruto' },
    });
  });
});

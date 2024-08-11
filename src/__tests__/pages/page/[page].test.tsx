import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import Page from '../../../pages/page/[page]';
import { Character } from '../../../types/characterResponse';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockStore = configureStore([]);
const mockRouterPush = jest.fn();

const mockCharacters: Character[] = [
  {
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
      anime: 'Naruto Episode 1',
      manga: 'Naruto Chapter 1',
    },
  },
];

describe('Page component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      selectedItems: { selectedItems: [] },
      theme: { darkTheme: false },
    });

    (useRouter as jest.Mock).mockReturnValue({
      query: {},
      push: mockRouterPush,
    });
  });

  test('renders page with characters', () => {
    render(
      <Provider store={store}>
        <Page characters={mockCharacters} totalPages={3} currentPage={1} searchQuery="" />
      </Provider>,
    );

    expect(screen.getByText('Naruto Uzumaki')).toBeInTheDocument();
    expect(
      screen.queryByText('Sorry, but there is no such character in the Naruto universe.'),
    ).not.toBeInTheDocument();
  });

  test('renders NotFoundChar when no characters', () => {
    render(
      <Provider store={store}>
        <Page characters={[]} totalPages={0} currentPage={1} searchQuery="" />
      </Provider>,
    );

    expect(
      screen.getByText('Sorry, but there is no such character in the Naruto universe.'),
    ).toBeInTheDocument();
  });

  test('triggers router push on card click', async () => {
    render(
      <Provider store={store}>
        <Page characters={mockCharacters} totalPages={3} currentPage={1} searchQuery="" />
      </Provider>,
    );

    const card = screen.getByText('Naruto Uzumaki');
    await userEvent.click(card);

    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith({
      pathname: `/page/1`,
      query: { searchQuery: '', detail: 1 },
    });
  });

  test('renders dark theme when darkTheme is true', () => {
    store = mockStore({
      selectedItems: { selectedItems: [] },
      theme: { darkTheme: true },
    });

    render(
      <Provider store={store}>
        <Page characters={mockCharacters} totalPages={3} currentPage={1} searchQuery="" />
      </Provider>,
    );

    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('mainDark');
  });

  test('renders Flyout when selectedItemsCount > 0', () => {
    store = mockStore({
      selectedItems: { selectedItems: [{ id: 1 }] },
      theme: { darkTheme: false },
    });

    render(
      <Provider store={store}>
        <Page characters={mockCharacters} totalPages={3} currentPage={1} searchQuery="" />
      </Provider>,
    );

    expect(screen.getByText('1 item is selected')).toBeInTheDocument();
  });
});

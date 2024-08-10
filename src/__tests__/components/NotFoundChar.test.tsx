import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundChar from '../../components/NotFoundChar/NotFoundChar';

describe('NotFoundChar component', () => {
  test('renders without crashing', () => {
    render(<NotFoundChar />);

    const paragraph = screen.getByRole('paragraph');
    expect(paragraph).toHaveTextContent(
      'Sorry, but there is no such character in the Naruto universe.',
    );
  });

  test('renders the container with the correct class name', () => {
    render(<NotFoundChar />);
    const container = screen.getByTestId('notFoundCharWrap');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('notFoundCharWrap');
  });

  test('renders the image div with the correct class name', () => {
    render(<NotFoundChar />);
    const imgDiv = screen.getByTestId('notFoundCharImg');
    expect(imgDiv).toBeInTheDocument();
    expect(imgDiv).toHaveClass('notFoundChar_img');
  });

  test('renders the text with correct content', () => {
    render(<NotFoundChar />);
    const textElement = screen.getByText(
      'Sorry, but there is no such character in the Naruto universe.',
    );
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('notFoundChar_text');
  });
});

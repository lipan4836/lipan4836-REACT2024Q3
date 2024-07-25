import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundChar from './NotFoundChar';

describe('NotFoundChar component', () => {
  test('renders NotFoundChar component with correct text', () => {
    render(<NotFoundChar />);
    expect(
      screen.getByText('Sorry, but there is no such character in the Naruto universe.'),
    ).toBeInTheDocument();
  });

  test('renders NotFoundChar component with image', () => {
    render(<NotFoundChar />);
    expect(document.querySelector('.notFoundChar_img')).toBeInTheDocument();
  });

  test('renders NotFoundChar component with correct class', () => {
    const { container } = render(<NotFoundChar />);
    expect(container.firstChild).toHaveClass('notFoundCharWrap');
  });
});

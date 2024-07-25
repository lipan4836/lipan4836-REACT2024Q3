import { render, screen } from '@testing-library/react';
import NoPhoto from './NoPhoto';

describe('NoPhoto', () => {
  it('renders without crashing', () => {
    render(<NoPhoto />);
    const noPhotoElement = screen.getByTestId('noPhotoComponent');
    expect(noPhotoElement).toBeInTheDocument();
  });

  it('displays the correct text', () => {
    render(<NoPhoto />);
    const noPhotoElement = screen.getByTestId('noPhotoComponent');
    expect(noPhotoElement).toHaveTextContent('No photo :(');
  });

  it('has the correct class', () => {
    render(<NoPhoto />);
    const noPhotoElement = screen.getByTestId('noPhotoComponent');
    expect(noPhotoElement).toHaveClass('noPhoto');
  });
});

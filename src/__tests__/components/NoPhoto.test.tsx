import React from 'react';
import { render, screen } from '@testing-library/react';
import NoPhoto from '../../components/NoPhoto/NoPhoto';

describe('NoPhoto Component', () => {
  test('renders the NoPhoto component with correct text', () => {
    render(<NoPhoto />);

    const noPhotoElement = screen.getByTestId('noPhotoComponent');

    expect(noPhotoElement).toBeInTheDocument();

    expect(noPhotoElement).toHaveTextContent('No photo :(');
  });
});

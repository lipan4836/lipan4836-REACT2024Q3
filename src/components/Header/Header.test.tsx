import { render, screen } from '@testing-library/react';
import Header from './Header';

jest.mock('../SearchBlock/SearchBlock', () => ({
  __esModule: true,
  default: () => <div>Mocked SearchBlock</div>,
}));

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the Header component correctly', () => {
    render(<Header />);

    expect(screen.getByText(/naruto characters base/i)).toBeInTheDocument();
    expect(screen.getByText('Mocked SearchBlock')).toBeInTheDocument();
  });
});

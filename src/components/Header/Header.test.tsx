import { render, screen } from '@testing-library/react';
import Header from './Header';
import AppProvider from '../AppContext/AppProvider';

jest.mock('../SearchBlock/SearchBlock', () => ({
  __esModule: true,
  default: () => <div>Mocked SearchBlock</div>,
}));

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the Header component correctly', () => {
    render(
      <AppProvider>
        <Header />
      </AppProvider>,
    );

    expect(screen.getByText(/naruto characters base/i)).toBeInTheDocument();
    expect(screen.getByText('Mocked SearchBlock')).toBeInTheDocument();
  });
});

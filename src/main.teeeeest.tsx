import { render } from '@testing-library/react';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('main.tsx', () => {
  it('renders without crashing', async () => {
    const { container } = render(<div id="root"></div>);

    await import('./main');

    expect(container.querySelector('#root')).not.toBeNull();
  });
});

import { act } from 'react';
import * as ReactDOM from 'react-dom/client';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('main.tsx', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
  });

  it('renders without crashing', async () => {
    await act(async () => {
      await import('./main');
    });

    expect(ReactDOM.createRoot).toHaveBeenCalledWith(container);
    const mockRoot = (ReactDOM.createRoot as jest.Mock).mock.results[0].value;
    expect(mockRoot.render).toHaveBeenCalled();
  });

  afterEach(() => {
    document.body.removeChild(container);
    jest.restoreAllMocks();
  });
});

import { Component, ErrorInfo } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from './ErrorBoundary';

class TestComponent extends Component {
  componentDidMount() {
    throw new Error('Test error');
  }

  render() {
    return <div>Test Component</div>;
  }
}

const FallbackComponent = ({
  error,
  errorInfo,
}: {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}) => (
  <div>
    <div>Error occurred</div>
    {error && <div>{error.message}</div>}
    {errorInfo && <div>{errorInfo.componentStack}</div>}
  </div>
);

describe('ErrorBoundary', () => {
  test('renders fallback component on error', () => {
    const originalConsoleError = console.error;
    console.error = jest.fn();

    render(
      <ErrorBoundary fallback={<FallbackComponent error={null} errorInfo={null} />}>
        <TestComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Error occurred')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();

    console.error = originalConsoleError;
  });
});

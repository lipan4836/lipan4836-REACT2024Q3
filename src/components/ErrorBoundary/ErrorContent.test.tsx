import { render, screen } from '@testing-library/react';
import ErrorContent from './ErrorContent';

describe('ErrorContent component', () => {
  test('renders error message and image when error and errorInfo are provided', () => {
    const mockError = new Error('Test error');
    const mockErrorInfo = {
      componentStack: 'Mock component stack trace',
    };

    render(<ErrorContent error={mockError} errorInfo={mockErrorInfo} />);

    const errorImage = screen.getByAltText('Error') as HTMLImageElement;
    expect(errorImage).toBeInTheDocument();

    const errorMessage = screen.getByText(/Ooops!.*Something gone wrong/i);
    expect(errorMessage).toBeInTheDocument();

    const errorText = screen.getByText(/Test error/i);
    expect(errorText).toBeInTheDocument();

    const stackTrace = screen.getByText('Mock component stack trace');
    expect(stackTrace).toBeInTheDocument();
  });

  test('renders only generic message when error and errorInfo are null', () => {
    render(<ErrorContent error={null} errorInfo={null} />);

    const errorImage = screen.getByAltText('Error') as HTMLImageElement;
    expect(errorImage).toBeInTheDocument();

    const genericMessage = screen.getByText(/Ooops!.*Something gone wrong/i);
    expect(genericMessage).toBeInTheDocument();

    const errorText = screen.queryByText(/Test error/i);
    expect(errorText).toBeNull();

    const stackTrace = screen.queryByText('Mock component stack trace');
    expect(stackTrace).toBeNull();
  });
});

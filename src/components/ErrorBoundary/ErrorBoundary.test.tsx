import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from './ErrorBoundary';
import ErrorContent from './ErrorContent';

const ProblematicComponent = () => {
  throw new Error('Test error');
};

test('renders fallback component on error', () => {
  render(
    <ErrorBoundary fallback={<ErrorContent error={null} errorInfo={null} />}>
      <ProblematicComponent />
    </ErrorBoundary>,
  );

  expect(
    screen.getByText(/Ooops!.. Something gone wrong. Please, reload page/i),
  ).toBeInTheDocument();
});

import React, { Component, ErrorInfo, ReactNode, ReactElement } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactElement<{ error: Error | null; errorInfo: ErrorInfo | null }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      const { error, errorInfo } = this.state;
      return React.cloneElement(this.props.fallback, { error, errorInfo });
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import { Component } from 'react';

class ErrorSimBtn extends Component<Record<string, never>, { simError: boolean }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { simError: false };
    this.simulateError = this.simulateError.bind(this);
  }

  simulateError() {
    this.setState({ simError: true });
  }

  render() {
    if (this.state.simError) {
      throw new Error('Simulate error');
    }

    return (
      <button className="simErrorBtn" onClick={this.simulateError}>
        Simulate error
      </button>
    );
  }
}

export default ErrorSimBtn;

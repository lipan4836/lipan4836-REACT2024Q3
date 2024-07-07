import { Component, ErrorInfo } from 'react';
import './ErrorContent.scss';
import errorImg from '../../assets/img/error.jpg';

interface ErrorContentProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorContent extends Component<ErrorContentProps> {
  render() {
    const { error, errorInfo } = this.props;

    return (
      <div className="errorContWrap">
        <div className="errorCont">
          <img src={errorImg} alt="Error" className="errorCont_img" />
          <p className="errorCont_text">Ooops!.. Something gone wrong :( Please, reload page</p>
          {error && <p className="errorCont_message">{error.toString()}</p>}
          {errorInfo && <pre className="errorCont_stack">{errorInfo.componentStack}</pre>}
        </div>
      </div>
    );
  }
}

export default ErrorContent;

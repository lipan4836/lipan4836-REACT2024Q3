import { Component } from 'react';

class ErrorContent extends Component {
  render() {
    return (
      <div className="errorContWrap">
        <div className="errorCont">
          <div className="errorCont_img"></div>
          <p className="errorCont_text">
            There must be description of error and where it was throwed
          </p>
        </div>
      </div>
    );
  }
}

export default ErrorContent;

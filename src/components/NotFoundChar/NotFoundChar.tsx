import { Component } from 'react';
import './NotFoundChar.scss';

class NotFoundChar extends Component {
  render() {
    return (
      <div className="notFoundCharWrap">
        <div className="notFoundChar">
          <div className="notFoundChar_img"></div>
          <p className="notFoundChar_text">
            Sorry, but there is no such character in the Naruto universe.
          </p>
        </div>
      </div>
    );
  }
}

export default NotFoundChar;

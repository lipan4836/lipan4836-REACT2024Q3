import { Component } from 'react';
import './Loader.scss';

class Loader extends Component {
  render() {
    return (
      <div className="loaderWrap">
        <span className="loader"></span>
      </div>
    );
  }
}

export default Loader;

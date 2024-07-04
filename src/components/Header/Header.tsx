import { Component } from 'react';
import './header.scss';
import SearchBlock from '../SearchBlock/SearchBlock';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="headerCont">
          <h1 className="h1">naruto characters base</h1>
          <SearchBlock />
        </div>
      </header>
    );
  }
}

export default Header;

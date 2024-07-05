import { Component } from 'react';
import './header.scss';
import SearchBlock from '../SearchBlock/SearchBlock';

interface HeaderProps {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  onSearch: () => void;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className="header">
        <div className="headerCont">
          <h1 className="h1">naruto characters base</h1>
          <SearchBlock
            setSearchQuery={this.props.setSearchQuery}
            searchQuery={this.props.searchQuery}
            onSearch={this.props.onSearch}
          />
        </div>
      </header>
    );
  }
}

export default Header;

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
    const { setSearchQuery, searchQuery, onSearch } = this.props;

    return (
      <header className="header">
        <div className="headerCont">
          <h1 className="h1">naruto characters base</h1>
          <SearchBlock
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            onSearch={onSearch}
          />
        </div>
      </header>
    );
  }
}

export default Header;

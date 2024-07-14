import './header.scss';
import SearchBlock from '../SearchBlock/SearchBlock';

function Header() {
  return (
    <header className="header">
      <div className="headerCont">
        <h1 className="h1">naruto characters base</h1>
        <SearchBlock />
      </div>
    </header>
  );
}

export default Header;

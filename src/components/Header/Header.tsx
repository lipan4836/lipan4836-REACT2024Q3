import './header.scss';
import SearchBlock from '../SearchBlock/SearchBlock';

function Header() {
  return (
    <header className="header">
      <div className="headerCont">
        <button className="reloadBtn" onClick={() => window.location.reload()}>
          <h1 className="h1">naruto characters base</h1>
        </button>
        <SearchBlock />
      </div>
    </header>
  );
}

export default Header;

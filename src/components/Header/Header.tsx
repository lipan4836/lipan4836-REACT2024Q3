import './header.scss';
import SearchBlock from '../SearchBlock/SearchBlock';
import useAppContext from '../AppContext/useAppContext';

function Header() {
  const { darkTheme } = useAppContext();

  return (
    <header className={darkTheme ? 'headerDark' : 'header'}>
      <div className="headerCont">
        <h1 className={darkTheme ? 'h1Dark' : 'h1'}>naruto characters base</h1>
        <SearchBlock />
      </div>
    </header>
  );
}

export default Header;

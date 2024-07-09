import './header.scss';
import SearchBlock from '../SearchBlock/SearchBlock';

interface HeaderProps {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  onSearch: () => void;
}

function Header({ setSearchQuery, searchQuery, onSearch }: HeaderProps) {
  const handleReload = () => {
    localStorage.removeItem('searchQuery');
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="headerCont">
        <button className="reloadBtn" onClick={handleReload}>
          <h1 className="h1">naruto characters base</h1>
        </button>
        <SearchBlock
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          onSearch={onSearch}
        />
      </div>
    </header>
  );
}

export default Header;

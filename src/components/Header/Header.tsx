import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { useAppSelector } from '../../hooks/hooksRedux';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/page/1?searchQuery=${searchQuery}`);
    } else {
      router.push('/page/1');
    }
  };

  return (
    <header className={darkTheme ? 'headerDark' : 'header'}>
      <div className="headerCont">
        <h1 className={darkTheme ? 'h1Dark' : 'h1'}>naruto characters base</h1>
        <form className="searchBlock" onSubmit={handleSearch}>
          <input
            type="search"
            className="searchBlock_input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="searchBlock_btn" type="submit">
            <Image
              src="/btn-search.svg"
              alt="search"
              className="searchBlock_btn__img"
              width={32}
              height={32}
            />
          </button>
          <ThemeBtn />
        </form>
      </div>
    </header>
  );
}

export default Header;

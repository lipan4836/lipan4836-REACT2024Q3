import React from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksRedux';
import { toggleTheme } from '../../store/slices/themeSlice';

function ThemeBtn() {
  const dispatch = useAppDispatch();
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button className="themeBtn" onClick={handleToggleTheme}>
      <Image
        className="themeBtn_img"
        src={darkTheme ? '/btn-light.svg' : '/btn-dark.svg'}
        alt={darkTheme ? 'switcher to light theme' : 'switcher to dark theme'}
        width={30}
        height={30}
      />
    </button>
  );
}

export default ThemeBtn;

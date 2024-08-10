import Image from 'next/image';
import dark from '../../assets/svg/btn-dark.svg';
import light from '../../assets/svg/btn-light.svg';
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
        src={darkTheme ? light : dark}
        alt={darkTheme ? 'switcher to light theme' : 'switcher to dark theme'}
      />
    </button>
  );
}

export default ThemeBtn;

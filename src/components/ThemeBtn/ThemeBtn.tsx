import Image from 'next/image';
import dark from '../../assets/svg/btn-dark.svg';
import light from '../../assets/svg/btn-light.svg';
import useAppContext from '../AppContext/useAppContext';

function ThemeBtn() {
  const { darkTheme, toggleTheme } = useAppContext();

  return (
    <button className="themeBtn" onClick={toggleTheme}>
      <Image
        className="themeBtn_img"
        src={darkTheme ? light : dark}
        alt={darkTheme ? 'switcher to light theme' : 'switcher to dark theme'}
      />
      {/* <Image
        className="themeBtn_img"
        src={dark}
        alt={'switcher to dark theme'}
      /> */}
      {/* <img
        className="themeBtn_img"
        src={darkTheme ? light : dark}
        alt={darkTheme ? 'switcher to light theme' : 'switcher to dark theme'}
      /> */}
    </button>
  );
}

export default ThemeBtn;

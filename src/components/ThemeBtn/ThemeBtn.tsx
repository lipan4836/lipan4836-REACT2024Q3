import dark from '../../assets/svg/btn-dark.svg';
import light from '../../assets/svg/btn-light.svg';
import useAppContext from '../AppContext/useAppContext';
import './ThemeBtn.scss';

function ThemeBtn() {
  const { darkTheme, toggleTheme } = useAppContext();

  return (
    <button className="themeBtn" onClick={toggleTheme}>
      <img className="themeBtn_img" src={darkTheme ? light : dark} alt="theme button" />
    </button>
  );
}

export default ThemeBtn;

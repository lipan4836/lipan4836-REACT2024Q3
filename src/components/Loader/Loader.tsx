import { useAppSelector } from '../../hooks/hooksRedux';

function Loader() {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);

  return (
    <div className={darkTheme ? 'loaderWrap loaderWrapDark' : 'loaderWrap'} data-testid="loader">
      <span className="loader"></span>
    </div>
  );
}

export default Loader;

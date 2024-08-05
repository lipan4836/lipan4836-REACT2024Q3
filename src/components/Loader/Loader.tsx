import useAppContext from '../AppContext/useAppContext';

function Loader() {
  const { darkTheme } = useAppContext();

  return (
    <div className={darkTheme ? 'loaderWrap loaderWrapDark' : 'loaderWrap'} data-testid="loader">
      <span className="loader"></span>
    </div>
  );
}

export default Loader;

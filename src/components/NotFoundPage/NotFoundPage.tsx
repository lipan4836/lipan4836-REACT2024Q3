import { useNavigate } from 'react-router-dom';
import useAppContext from '../AppContext/useAppContext';

function NotFoundPage() {
  const navigate = useNavigate();
  const { darkTheme } = useAppContext();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <article className={darkTheme ? 'notFoundPageWrap darkWrap' : 'notFoundPageWrap'}>
      <div className="notFoundPage">
        <div className="notFoundPage_img"></div>
        <p className="notFoundPage_msg">Looks like you were lost. There is no such page.</p>
        <button className="notFoundPage_btn" onClick={goBack}>
          Go back
        </button>
      </div>
    </article>
  );
}

export default NotFoundPage;

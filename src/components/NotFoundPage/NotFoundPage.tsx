import { useNavigate } from 'react-router-dom';
import './NotFoundPage.scss';

function NotFoundPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="notFoundPageWrap">
      <div className="notFoundPage">
        <div className="notFoundPage_img"></div>
        <p className="notFoundPage_msg">Looks like you were lost. There is no such page.</p>
        <button className="notFoundPage_btn" onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;

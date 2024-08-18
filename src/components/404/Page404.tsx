import { useNavigate } from 'react-router-dom';
import img404 from '../../assets/svg/404.svg';
import './Page404.scss';

function Page404() {
  const navigate = useNavigate();

  const handleGoHome = () => navigate('/');

  return (
    <main className="main">
      <img className="notFoundPage_img" src={img404} alt="not found page" />
      <p className="notFoundPage_text">
        Sorry, but it looks like there's no such page here. It looks like you got lost.
      </p>
      <button onClick={handleGoHome}>Go Home</button>
    </main>
  );
}

export default Page404;

import { useNavigate } from 'react-router-dom';
import './GoBackBtn.scss';

function GoBackBtn() {
  const navigate = useNavigate();

  const handleGoBack = () => navigate('/');

  return (
    <button className="go-back-btn" onClick={handleGoBack}>
      Home
    </button>
  );
}

export default GoBackBtn;

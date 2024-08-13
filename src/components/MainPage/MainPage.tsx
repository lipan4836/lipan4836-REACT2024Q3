import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <main className="main">
      <h2 className="head-h2">Main page</h2>
      <Link to={'/unctrl'}>Uncontrolled Form</Link>
      <Link to={'/ctrl'}>React Hook Form</Link>
    </main>
  );
}

export default MainPage;

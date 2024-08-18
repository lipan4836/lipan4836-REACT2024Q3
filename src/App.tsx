import { Outlet } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

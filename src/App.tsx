import AppProvider from './components/AppContext/AppProvider';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <Header />
      <Outlet />
    </AppProvider>
  );
}

export default App;

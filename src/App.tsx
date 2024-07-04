import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MainContent from './components/Main/MainContent';
import fetchData from './api/api';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainContent />
      </>
    );
  }
}

fetchData(1, 5)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

export default App;

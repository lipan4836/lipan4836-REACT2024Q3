import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MainContent from './components/Main/MainContent';

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

export default App;

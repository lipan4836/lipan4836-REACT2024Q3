import { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MainContent from './components/Main/MainContent';

interface AppState {
  searchQuery: string;
  triggerSearch: boolean;
}

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchQuery: localStorage.getItem('searchQuery') || '',
      triggerSearch: false,
    };
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.resetTriggerSearch = this.resetTriggerSearch.bind(this);
  }

  setSearchQuery(query: string) {
    this.setState({ searchQuery: query });
    localStorage.setItem('searchQuery', query);
  }

  handleSearch() {
    this.setState({ triggerSearch: true });
  }

  resetTriggerSearch() {
    this.setState({ triggerSearch: false });
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <>
        <Header
          setSearchQuery={this.setSearchQuery}
          searchQuery={searchQuery}
          onSearch={this.handleSearch}
        />
        <MainContent
          searchQuery={searchQuery}
          triggerSearch={this.state.triggerSearch}
          resetTriggerSearch={this.resetTriggerSearch}
        />
      </>
    );
  }
}

export default App;

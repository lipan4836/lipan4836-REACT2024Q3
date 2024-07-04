import { Component } from 'react';
import './mainContent.scss';
import { Character, CharacterResponse } from '../../types/characterResponse';
import fetchData from '../../api/api';
import Card from '../Card/Card';

interface MainContentState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

class MainContent extends Component<Record<string, never>, MainContentState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      characters: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount(): Promise<void> {
    try {
      const response: CharacterResponse = await fetchData(1, 6);
      this.setState({ characters: response.characters, loading: false });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      this.setState({ error: errorMessage, loading: false });
    }
  }

  render() {
    const { characters, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <main>
        <div className="mainWrap">
          {characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </main>
    );
  }
}

export default MainContent;

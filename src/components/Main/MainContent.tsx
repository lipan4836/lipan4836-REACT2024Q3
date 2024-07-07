import { Component } from 'react';
import './mainContent.scss';
import { Character, CharacterResponse } from '../../types/characterResponse';
import fetchData from '../../api/api';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import NotFoundChar from '../NotFoundChar/NotFoundChar';

interface MainContentState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

interface MainContentProps {
  searchQuery: string;
  triggerSearch: boolean;
  resetTriggerSearch: () => void;
}

class MainContent extends Component<MainContentProps, MainContentState> {
  constructor(props: MainContentProps) {
    super(props);
    this.state = {
      characters: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount(): Promise<void> {
    this.loadCharacters();
  }

  async componentDidUpdate(prevProps: MainContentProps): Promise<void> {
    if (prevProps.triggerSearch !== this.props.triggerSearch && this.props.triggerSearch) {
      await this.loadCharacters();

      this.props.resetTriggerSearch();
    }
  }

  async loadCharacters(): Promise<void> {
    const { searchQuery } = this.props;

    this.setState({ loading: true, error: null });

    try {
      const response: CharacterResponse = await fetchData(1, 6, searchQuery);
      this.setState({ characters: response.characters, loading: false });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      this.setState({ error: errorMessage, loading: false });
    }
  }

  render() {
    const { characters, loading, error } = this.state;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <main className="main">
        {characters.length > 0 ? (
          <div className="mainWrap">
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <NotFoundChar />
        )}
      </main>
    );
  }
}

export default MainContent;

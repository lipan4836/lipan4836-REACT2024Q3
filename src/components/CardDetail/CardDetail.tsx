import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../../types/characterResponse';
import './CardDetail.scss';
import { fetchDataById } from '../../api/api';
import Loader from '../Loader/Loader';
import NoPhoto from '../NoPhoto/NoPhoto';

function CardDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCharacter = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchDataById(id ? +id : 999);
        setCharacter(response);
        setLoading(false);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        setError(errorMessage);
        setLoading(false);
      }
    };

    loadCharacter();
  }, [id]);

  if (loading) return <Loader />;

  if (error) return <div>Error: {error}</div>;

  if (!character) return <div>No character found</div>;

  return (
    <>
      <h2 className="char_name">{character.name}</h2>
      {character.images.length ? (
        <img src={character.images[0]} alt={character.name} className="char_img" />
      ) : (
        <NoPhoto />
      )}
      <div className="char_personal">
        {character.personal.birthdate && (
          <div className="char_personal_box">
            <p className="char_personal_box_data">
              <strong>Birthdate:</strong> {character.personal.birthdate}
            </p>
          </div>
        )}
        <p className="char_personal_box_data">
          <strong>Sex:</strong> {character.personal.sex}
        </p>
        {character.personal.birthdate && (
          <div className="char_personal_box">
            <p className="char_personal_box_data">
              <strong>Clan:</strong> {character.personal.clan}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CardDetail;

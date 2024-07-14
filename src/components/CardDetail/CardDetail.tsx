import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Character } from '../../types/characterResponse';
import './CardDetail.scss';
import { fetchDataById } from '../../api/api';
import Loader from '../Loader/Loader';
import NoPhoto from '../NoPhoto/NoPhoto';
import closeBtn from '../../assets/svg/close.svg';

function CardDetail() {
  const { id, pageId } = useParams<{ id: string; pageId: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCharacter = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id) {
          const response = await fetchDataById(+id);
          setCharacter(response);
        }
        setLoading(false);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        setError(errorMessage);
        setLoading(false);
      }
    };

    if (id) {
      loadCharacter();
    }
  }, [id]);

  const handleClosePage = () => {
    navigate(`/page/${pageId}`);
  };

  if (loading) return <Loader />;

  if (error) return <div>Error: {error}</div>;

  if (!character) return <div>No character found</div>;

  return (
    <div className="detailsWrap">
      <div className="characterDetails">
        <button className="closePage" onClick={handleClosePage}>
          <img src={closeBtn} alt="close details" className="closePage_img" />
        </button>
        <h2 className="charDetail_name">{character.name}</h2>
        {character.images.length ? (
          <img src={character.images[0]} alt={character.name} className="char_img" />
        ) : (
          <NoPhoto />
        )}
        <div className="charDetail_personal">
          {character.personal.birthdate && (
            <div className="charDetail_personal_box">
              <p className="charDetail_personal_box_data">
                <strong>Birthdate:</strong> {character.personal.birthdate}
              </p>
            </div>
          )}
          <p className="charDetail_personal_box_data">
            <strong>Sex:</strong> {character.personal.sex}
          </p>
          {character.personal.clan && (
            <div className="charDetail_personal_box">
              <p className="charDetail_personal_box_data">
                <strong>Clan:</strong> {character.personal.clan}
              </p>
            </div>
          )}
          {character.debut && <p className="charDetail_debut">Debut:</p>}
          {character.debut?.anime && (
            <p className="charDetail_debut_type">Anime: {character.debut.anime}</p>
          )}
          {character.debut?.manga && (
            <p className="charDetail_debut_type">Manga: {character.debut.manga}</p>
          )}
          {character.debut?.novel && (
            <p className="charDetail_debut_type">Novel: {character.debut.novel}</p>
          )}
          {character.debut?.game && (
            <p className="charDetail_debut_type">Game: {character.debut.game}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;

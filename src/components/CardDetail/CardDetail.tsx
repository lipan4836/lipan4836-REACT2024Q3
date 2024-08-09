import NoPhoto from '../NoPhoto/NoPhoto';
import closeBtn from '../../assets/svg/close.svg';
import { useRouter } from 'next/router';
import { Character } from '../../types/characterResponse';
import Image from 'next/image';

type CardDetailProps = {
  character: Character;
};

function CardDetail({ character }: CardDetailProps) {
  const router = useRouter();

  const handleClosePage = () => {
    router.push({
      pathname: `/page/${router.query.page}`,
      query: { searchQuery: router.query.searchQuery },
    });
  };

  return (
    <div className="detailsWrap">
      <article className="characterDetails">
        <button className="closePage" onClick={handleClosePage}>
          <Image src={closeBtn} alt="close details" className="closePage_img" />
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
      </article>
    </div>
  );
}

export default CardDetail;

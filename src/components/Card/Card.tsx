import { Character } from '../../types/characterResponse';
import './Card.scss';
import NoPhoto from '../NoPhoto/NoPhoto';

interface CardProps {
  character: Character;
}

function Card({ character }: CardProps) {
  const { name, images, personal } = character;

  return (
    <div className="char">
      <h2 className="char_name">{name}</h2>
      {images.length ? <img src={images[0]} alt={name} className="char_img" /> : <NoPhoto />}
      <div className="char_personal">
        {personal.birthdate && (
          <div className="char_personal_box">
            <p className="char_personal_box_data">
              <strong>Birthdate:</strong> {personal.birthdate}
            </p>
          </div>
        )}
        <p className="char_personal_box_data">
          <strong>Sex:</strong> {personal.sex}
        </p>
        {personal.birthdate && (
          <div className="char_personal_box">
            <p className="char_personal_box_data">
              <strong>Clan:</strong> {personal.clan}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

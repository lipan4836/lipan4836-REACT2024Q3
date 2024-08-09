import { Character } from '../../types/characterResponse';
import NoPhoto from '../NoPhoto/NoPhoto';

interface CardProps {
  character: Character;
  onClick: () => void;
}

function Card({ character, onClick }: CardProps) {
  const { name, images, id } = character;

  return (
    <article className={'char'} data-id={id} onClick={onClick}>
      <div className="char_headCont">
        <h2 className="char_headCont__name">{name}</h2>
        {/* <Checkbox character={character} /> */}
      </div>

      {images.length ? <img src={images[0]} alt={name} className="char_img" /> : <NoPhoto />}
    </article>
  );
}

export default Card;

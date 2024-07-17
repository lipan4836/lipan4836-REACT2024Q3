import { Character } from '../../types/characterResponse';
import './Card.scss';
import NoPhoto from '../NoPhoto/NoPhoto';
import useAppContext from '../AppContext/useAppContext';

interface CardProps {
  character: Character;
  onClick: () => void;
}

function Card({ character, onClick }: CardProps) {
  const { name, images, id } = character;
  const { darkTheme } = useAppContext();

  return (
    <article className={darkTheme ? 'char charDark' : 'char'} data-id={id} onClick={onClick}>
      <h2 className="char_name">{name}</h2>
      {images.length ? <img src={images[0]} alt={name} className="char_img" /> : <NoPhoto />}
    </article>
  );
}

export default Card;

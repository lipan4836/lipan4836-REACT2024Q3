import { Character } from '../../types/characterResponse';
import './Card.scss';
import NoPhoto from '../NoPhoto/NoPhoto';
import useAppContext from '../AppContext/useAppContext';
import Checkbox from './Checkbox/Checkbox';

interface CardProps {
  character: Character;
  onClick: () => void;
}

function Card({ character, onClick }: CardProps) {
  const { name, images, id } = character;
  const { darkTheme } = useAppContext();

  return (
    <article className={darkTheme ? 'char charDark' : 'char'} data-id={id} onClick={onClick}>
      <div className="char_headCont">
        <h2 className="char_headCont__name">{name}</h2>
        <Checkbox id={id} />
      </div>

      {images.length ? <img src={images[0]} alt={name} className="char_img" /> : <NoPhoto />}
    </article>
  );
}

export default Card;

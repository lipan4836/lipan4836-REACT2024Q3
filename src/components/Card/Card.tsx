import React from 'react';
import { useAppSelector } from '../../hooks/hooksRedux';
import { Character } from '../../types/characterResponse';
import NoPhoto from '../NoPhoto/NoPhoto';
import Checkbox from './Checkbox/Checkbox';

interface CardProps {
  character: Character;
  onClick: () => void;
}

function Card({ character, onClick }: CardProps) {
  const { name, images, id } = character;
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);

  return (
    <article className={darkTheme ? 'char charDark' : 'char'} data-id={id} onClick={onClick}>
      <div className="char_headCont">
        <h2 className="char_headCont__name">{name}</h2>
        <Checkbox character={character} />
      </div>
      {images.length ? <img src={images[0]} alt={name} className="char_img" /> : <NoPhoto />}
    </article>
  );
}

export default Card;

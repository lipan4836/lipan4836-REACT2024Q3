import { Component } from 'react';
import { Character } from '../../types/characterResponse';
import './Card.scss';

interface CardProps {
  character: Character;
}

class Card extends Component<CardProps, Record<string, never>> {
  render() {
    const { name, images, personal } = this.props.character;

    return (
      <div className="char">
        <h2 className="char_name">{name}</h2>
        <img src={images[0]} alt={name} className="char_img" />
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
}

export default Card;

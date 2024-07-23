import React from 'react';
import './Checkbox.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../../store/slices/selectedItemsSlice';
import { RootState } from '../../../store/strore';
import { Character } from '../../../types/characterResponse';

interface CheckboxProps {
  character: Character;
}

const Checkbox: React.FC<CheckboxProps> = ({ character }) => {
  const dispatch = useDispatch();
  const isSelected = useSelector((state: RootState) =>
    state.selectedItems.selectedItems.some((item) => item.id === character.id),
  );

  const handleCheckboxChange = () => {
    if (isSelected) {
      dispatch(removeItem(character.id));
    } else {
      dispatch(addItem(character));
    }
  };

  const handleCheckboxClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="check"
        id={`check${character.id}`}
        checked={isSelected}
        onChange={handleCheckboxChange}
        onClick={handleCheckboxClick}
      />
      <label htmlFor={`check${character.id}`} className="label">
        <svg viewBox="0 0 100 100" height="50" width="50">
          <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
          <g transform="translate(0,-952.36216)" id="layer1">
            <path
              id="path4146"
              d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23"
              fill="none"
              stroke="black"
              strokeWidth="3"
              className="path1"
            />
          </g>
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;

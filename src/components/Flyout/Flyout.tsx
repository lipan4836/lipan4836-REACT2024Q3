import { RootState } from '../../store/strore';
import { useAppSelector } from '../../hooks/hooksRedux';
import useAppContext from '../AppContext/useAppContext';
import './Flyout.scss';
import { useDispatch } from 'react-redux';
import { removeAllItems } from '../../store/slices/selectedItemsSlice';

function Flyout() {
  const { darkTheme } = useAppContext();
  const selectedItems = useAppSelector((state: RootState) => state.selectedItems.selectedItems);
  const dispatch = useDispatch();

  const handleUnselectAll = () => {
    dispatch(removeAllItems());
  };

  return (
    <>
      <div className="flyout">
        <p className="flyout_text">
          {selectedItems.length} {selectedItems.length === 1 ? 'item is' : 'items are'} selected
        </p>
        <button
          className={darkTheme ? 'flyout_btn dark_btn' : 'flyout_btn'}
          onClick={handleUnselectAll}
        >
          Unselect all
        </button>
        <button className={darkTheme ? 'flyout_btn dark_btn' : 'flyout_btn'}>Download</button>
      </div>
    </>
  );
}

export default Flyout;

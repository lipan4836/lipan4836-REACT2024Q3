import { RootState } from '../../store/store';
import { useAppSelector } from '../../hooks/hooksRedux';
import useAppContext from '../AppContext/useAppContext';
import { useDispatch } from 'react-redux';
import { removeAllItems } from '../../store/slices/selectedItemsSlice';
import { Character } from '../../types/characterResponse';
import { useState } from 'react';

function Flyout() {
  const { darkTheme } = useAppContext();
  const selectedItems = useAppSelector((state: RootState) => state.selectedItems.selectedItems);
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  const handleUnselectAll = () => {
    dispatch(removeAllItems());
  };

  const createCsvContent = (data: Character[]) => {
    const headers = ['id', 'Name', 'Birthday', 'Sex', 'Clan', 'Image'];
    const rows = data.map((item) => [
      `${item.id}`,
      `${item.name}`,
      `${item.personal.birthdate ? item.personal.birthdate : 'unknown'}`,
      `${item.personal.sex ? item.personal.sex : 'unknown'}`,
      `${item.personal.clan ? item.personal.clan : 'unknown'}`,
      `${item.images[0] ? item.images[0] : 'no image'}`,
    ]);

    return [headers.join(','), ...rows.map((row) => row.join(','))].join('\n') + '\n';
  };

  const handleDownload = () => {
    const csvData = createCsvContent(selectedItems);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    setUrl(URL.createObjectURL(blob));
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
        <a href={url} download={`${selectedItems.length}_characters.csv`}>
          <button
            className={darkTheme ? 'flyout_btn dark_btn' : 'flyout_btn'}
            onClick={handleDownload}
          >
            Download
          </button>
        </a>
      </div>
    </>
  );
}

export default Flyout;

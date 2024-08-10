import { Character } from '../../types/characterResponse';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooksRedux';
import { removeAllItems } from '../../store/slices/selectedItemsSlice';

function Flyout() {
  const selectedItems = useAppSelector((state) => state.selectedItems.selectedItems);
  const dispatch = useAppDispatch();
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
          className={'flyout_btn'}
          onClick={handleUnselectAll}
        >
          Unselect all
        </button>
        <a href={url} download={`${selectedItems.length}_characters.csv`}>
          <button
            className={'flyout_btn'}
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

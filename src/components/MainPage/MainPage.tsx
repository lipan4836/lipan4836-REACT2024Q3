import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useState, useEffect } from 'react';

function MainPage() {
  const currentData = useSelector((state: RootState) => state.form.currentData);
  const previousData = useSelector((state: RootState) => state.form.previousData);
  const [highlightedFields, setHighlightedFields] = useState<string[]>([]);

  useEffect(() => {
    if (currentData && previousData) {
      const changedFields = Object.keys(currentData).filter((key) => {
        return (
          currentData[key as keyof typeof currentData] !==
          previousData[key as keyof typeof previousData]
        );
      });

      setHighlightedFields(changedFields);

      const timeout = setTimeout(() => {
        setHighlightedFields([]);
      }, 3000); // Подсветка на 3 секунды

      return () => clearTimeout(timeout);
    }
  }, [currentData, previousData]);

  const isCurrentDataEmpty = Object.values(currentData).every(
    (value) => value === '' || value === null || value === false,
  );

  return (
    <main className="main">
      <h2 className="head-h2">Main page</h2>
      <Link to={'/unctrl'}>Uncontrolled Form</Link>
      <Link to={'/ctrl'}>React Hook Form</Link>

      {!isCurrentDataEmpty && (
        <div className="form-data">
          <h3>Submitted Data</h3>
          <ul className="list">
            {Object.entries(currentData).map(([key, value]) =>
              key !== 'imageBase64' ? (
                <li
                  key={key}
                  className={
                    highlightedFields.includes(key) ? 'highlight saved-data' : 'saved-data'
                  }
                >
                  <div className="data-wrap">
                    <span className="data_key">{key[0].toUpperCase().concat(key.slice(1))}</span>
                    <span className="data_value">{value?.toString()}</span>
                  </div>
                </li>
              ) : (
                currentData.imageBase64 && (
                  <li
                    key={key}
                    className={
                      highlightedFields.includes(key)
                        ? 'highlight saved-data image-cont'
                        : 'saved-data image-cont'
                    }
                  >
                    <span className="data_key">Uploaded Image</span>
                    <img
                      src={currentData.imageBase64}
                      alt="Uploaded Preview"
                      style={{ maxWidth: '35%' }}
                    />
                  </li>
                )
              ),
            )}
          </ul>
        </div>
      )}
    </main>
  );
}

export default MainPage;

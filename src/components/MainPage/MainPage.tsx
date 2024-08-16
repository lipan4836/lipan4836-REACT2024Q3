import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useState, useEffect } from 'react';
import './MainPage.scss';

function MainPage() {
  const submissions = useSelector((state: RootState) => state.form.submissions);
  const lastAddedTimestamp = useSelector((state: RootState) => state.form.lastAddedTimestamp);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lastAddedTimestamp) {
      setHighlightedIndex(submissions.length - 1);

      const timeout = setTimeout(() => {
        setHighlightedIndex(null);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [lastAddedTimestamp, submissions.length]);

  return (
    <main className="main">
      <h2 className="h2">Main page</h2>
      <Link to={'/unctrl'}>Uncontrolled Form</Link>
      <Link to={'/ctrl'}>React Hook Form</Link>

      {submissions.length > 0 && (
        <div className="form-data">
          <h3 className="h3">Submitted Data</h3>
          <ul className="list">
            {submissions.map((submit, index) => (
              <li
                key={index}
                className={`saved-data ${highlightedIndex === index ? 'highlight' : ''}`}
              >
                {Object.entries(submit).map(([key, value]) =>
                  key !== 'imageBase64' ? (
                    <div key={key} className="data-wrap">
                      <span className="data_key">{key[0].toUpperCase().concat(key.slice(1))}</span>
                      <span className="data_value">{value?.toString()}</span>
                    </div>
                  ) : (
                    submit.imageBase64 && (
                      <div key={key} className="data-wrap image-cont">
                        <span className="data_key">Uploaded Image</span>
                        <img
                          src={submit.imageBase64}
                          alt="Uploaded Preview"
                          style={{ maxWidth: '35%' }}
                        />
                      </div>
                    )
                  ),
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default MainPage;

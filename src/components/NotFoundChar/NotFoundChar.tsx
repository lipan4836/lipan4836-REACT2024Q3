import React from 'react';

function NotFoundChar() {
  return (
    <div className="notFoundCharWrap" data-testid="notFoundCharWrap">
      <div className="notFoundChar">
        <div className="notFoundChar_img" data-testid="notFoundCharImg"></div>
        <p className="notFoundChar_text">
          Sorry, but there is no such character in the Naruto universe.
        </p>
      </div>
    </div>
  );
}

export default NotFoundChar;

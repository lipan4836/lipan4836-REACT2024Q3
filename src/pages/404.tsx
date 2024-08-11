import React from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../hooks/hooksRedux';

function Custom404() {
  const router = useRouter();
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);

  const goBack = () => {
    router.back();
  };

  return (
    <article className={darkTheme ? 'notFoundPageWrap darkWrap' : 'notFoundPageWrap'}>
      <div className="notFoundPage">
        <div className="notFoundPage_img"></div>
        <p className="notFoundPage_msg">Looks like you were lost. There is no such page.</p>
        <button className="notFoundPage_btn" onClick={goBack}>
          Go back
        </button>
      </div>
    </article>
  );
}

export default Custom404;

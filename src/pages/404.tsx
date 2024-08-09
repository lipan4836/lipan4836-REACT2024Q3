import { useRouter } from 'next/router';

function Custom404() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <article className={'notFoundPageWrap'}>
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

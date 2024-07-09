import './NotFoundPage.scss';

function NotFoundPage() {
  return (
    <div className="notFoundPageWrap">
      <div className="notFoundPage">
        <div className="notFoundPage_img"></div>
        <p className="notFoundPage_msg">Looks like you were lost. There is no such page.</p>
        <button className="notFoundPage_btn">Go back</button>
      </div>
    </div>
  );
}

export default NotFoundPage;

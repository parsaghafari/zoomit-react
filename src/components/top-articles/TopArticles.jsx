import iranNetImg from '../../assets/images/top-articles/iran-internet.png';
import momotaroImg from '../../assets/images/top-articles/MOMOTARO_JEANS_AOYAMA.png';
import ps5Img from '../../assets/images/top-articles/ps5pro3.png';

function TopArticles() {
  return (
    <div className="top-articles">
      <a href="#" className="article-1">
        <img src={momotaroImg} alt="momotaro jeans store" />
        <h2 className="article-title">موموتارو جینز</h2>
      </a>
      <a href="#" className="article-2">
        <img src={iranNetImg} alt="iran internet" />
        <h2 className="article-title">اینترنت ایران</h2>
      </a>
      <a href="#" className="article-3">
        <img src={ps5Img} alt="ps5 pro" />
        <h2 className="article-title">پلی استیشن 5 پرو</h2>
      </a>
    </div>
  );
}

export default TopArticles;

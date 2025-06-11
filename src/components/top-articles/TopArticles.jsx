import iranNetImg from '../../assets/images/top-articles/iran-internet.png';
import momotaroImg from '../../assets/images/top-articles/MOMOTARO_JEANS_AOYAMA.png';
import ps5Img from '../../assets/images/top-articles/ps5pro3.png';
import styles from './TopArticles.module.css';

function TopArticles() {
  return (
    <div className={styles.top_articles}>
      <a href="#" className="article-1">
        <img src={momotaroImg} alt="momotaro jeans store" />
        <h4 className={styles.article_title}>موموتارو جینز</h4>
      </a>
      <a href="#" className="article-2">
        <img src={iranNetImg} alt="iran internet" />
        <h4 className={styles.article_title}>اینترنت ایران</h4>
      </a>
      <a href="#" className="article-3">
        <img src={ps5Img} alt="ps5 pro" />
        <h4 className={styles.article_title}>پلی استیشن 5 پرو</h4>
      </a>
    </div>
  );
}

export default TopArticles;

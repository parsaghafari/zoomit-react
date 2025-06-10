import styles from './Ads.module.css';
import ad1 from '../../assets/images/ads/shatel-ad.gif';
import ad2 from '../../assets/images/ads/arizzo-ad.gif';

function Ads() {
  return (
    <div className={styles.ads}>
      <div className={styles.hr_text}>
        <button>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <span>تبلیغات</span>
      </div>
      <div className={styles.ads_right}>
        <a href="#">
          <img src={ad1} alt="shatel advertisement gif" />
        </a>
      </div>
      <div className={styles.ads_left}>
        <a href="#">
          <img src={ad2} alt="arizzo advertisement gif" />
        </a>
      </div>
    </div>
  );
}

export default Ads;

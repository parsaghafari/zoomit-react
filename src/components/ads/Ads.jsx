import styles from './Ads.module.css';

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
          <img
            src="assets/images/shatel-ad.gif"
            alt="shatel advertisement gif"
          />
        </a>
      </div>
      <div className={styles.ads_left}>
        <a href="#">
          <img
            src="assets/images/arizzo-ad.gif"
            alt="arizzo advertisement gif"
          />
        </a>
      </div>
    </div>
  );
}

export default Ads;

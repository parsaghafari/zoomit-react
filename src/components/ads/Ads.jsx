import styles from './Ads.module.css';

function Ads(props) {
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
          <img src={props.firstSrc} alt={props.firstAlt} />
        </a>
      </div>
      <div className={styles.ads_left}>
        <a href="#">
          <img src={props.secondSrc} alt={props.secondAlt} />
        </a>
      </div>
    </div>
  );
}

export default Ads;

import styles from './LatestVideos.module.css';

function LatestVideos() {
  return (
    <div className={styles.latest_videos}>
      <div className={styles.head}>
        <h3>آخرین ویدیوها</h3>
        <a href="">
          <span>مشاهده همه ویدیوها</span>
          <i className="fa-solid fa-arrow-left"></i>
        </a>
      </div>
    </div>
  );
}

export default LatestVideos;

import img1 from '../../assets/images/most-visited/metal-ring-kenya-space-junk.webp';
import img2 from '../../assets/images/most-visited/los-angeles-322839_1280.jpg';
import img3 from '../../assets/images/most-visited/phone-5584035_1280.jpg';
import styles from './MostVisited.module.css';

function MostVisited() {
  return (
    <div className={styles.most_visited}>
      <h3>پربازدیدترین مطالب</h3>
      <div className={styles.grid_container}>
        <a href="#">
          <h4>
            <i className="fa-solid fa-fire"></i>لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </h4>
          <img src={img1} alt="metal ring in kenya" />
          <div className={styles.tme_date}>
            <span>
              <i className="fa-regular fa-clock"></i> 10&prime; مطالعه
            </span>
            <span>
              <i className="fa-regular fa-calendar"></i>2 روز پیش
            </span>
          </div>
        </a>
        <a href="#">
          <h4>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده
          </h4>
          <img src={img2} alt="a photo of los angeles" />
          <div className={styles.time_date}>
            <span>
              <i className="fa-regular fa-clock"></i> 10&prime; مطالعه
            </span>
            <span>
              <i className="fa-regular fa-calendar"></i>2 روز پیش
            </span>
          </div>
        </a>
        <a href="#">
          <h4>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از
          </h4>
          <img src={img3} alt="phone with instagram on its screen" />
          <div className={styles.time_date}>
            <span>
              <i className="fa-regular fa-clock"></i> 10&prime; مطالعه
            </span>
            <span>
              <i className="fa-regular fa-calendar"></i>2 روز پیش
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MostVisited;

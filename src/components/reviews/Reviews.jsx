import reviewImg1 from '../../assets/images/reviews/camera-phone-comparison.webp';
import reviewImg2 from '../../assets/images/reviews/ps5-pro-with-controller.jpg';
import reviewImg3 from '../../assets/images/reviews/vivo-x200-pro-back.webp';
import styles from './Reviews.module.css';

function Reviews() {
  return (
    <div className={styles.reviews}>
      <h3>بررسی‌ها</h3>
      <div className={styles.grid_container}>
        <a href="#">
          <h5>
            <i className="fa-solid fa-fire"></i>لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </h5>
          <img src={reviewImg1} alt="three models of phones" />
          <div className="time-date">
            <span>
              <i className="fa-regular fa-clock"></i> 10&prime; مطالعه
            </span>
            <span>
              <i className="fa-regular fa-calendar"></i>2 روز پیش
            </span>
          </div>
        </a>
        <a href="#">
          <h5>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده
          </h5>
          <img src={reviewImg2} alt="playstation5 pro with its controller" />
          <div className="time-date">
            <span>
              <i className="fa-regular fa-clock"></i> 10&prime; مطالعه
            </span>
            <span>
              <i className="fa-regular fa-calendar"></i>2 روز پیش
            </span>
          </div>
        </a>
        <a href="#">
          <h5>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از
          </h5>
          <img src={reviewImg3} alt="vivo x200 pro phone" />
          <div className="time-date">
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

export default Reviews;

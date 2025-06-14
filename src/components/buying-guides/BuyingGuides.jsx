import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import gamepadsImg from '../../assets/images/buying-guides/gamepads.jpg';
import cpusImg from '../../assets/images/buying-guides/cpus.jpg';
import toothbrushImg from '../../assets/images/buying-guides/toothbrush.jpg';
import styles from './BuyingGuides.module.css';

function BuyingGuides() {
  return (
    <div className={styles.buying_guides}>
      <div className={styles.head}>
        <h3>راهنمای خرید</h3>
        <a href="#" className={styles.view_all}>
          <span>مشاهده همه</span>
          <i className="fa-solid fa-arrow-left"></i>
        </a>
      </div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        className={styles.swiper}
        spaceBetween={30}
        slidesPerView={2}
      >
        <SwiperSlide>
          <a href="#" className={styles.slider_item}>
            <h5>
              <i className="fa-solid fa-fire"></i>
              بهترین دسته بازی برای کامپیوتر [دی 1403]
            </h5>
            <img src={gamepadsImg} alt="some gamepads" />
            <div className={styles.time_date}>
              <span>
                <i className="fa-regular fa-clock"></i> 10&prime; مطالعه
              </span>
              <span>
                <i className="fa-regular fa-calendar"></i>2 روز پیش
              </span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className={styles.slider_item}>
            <h5>بهترین مسواک برقی بازار [دی 1403]</h5>
            <img src={toothbrushImg} alt="electronic toothbrushes" />
            <div className={styles.time_date}>
              <span>
                <i className="fa-regular fa-clock"></i> 5&prime; مطالعه
              </span>
              <span>
                <i className="fa-regular fa-calendar"></i>1 روز پیش
              </span>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className={styles.slider_item}>
            <h5>بهترین پردازنده [دی 1403]</h5>
            <img src={cpusImg} alt="some cpus" />
            <div className={styles.time_date}>
              <span>
                <i className="fa-regular fa-clock"></i> 10&prime; مطالعه
              </span>
              <span>
                <i className="fa-regular fa-calendar"></i>3 روز پیش
              </span>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BuyingGuides;

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
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
          <a href="#" className="slider-item">
            <h5>
              <i className="fa-solid fa-fire"></i>
              بهترین دسته بازی برای کامپیوتر [دی 1403]
            </h5>
            <img src="assets/images/blog/gamepads.jpg" alt="some gamepads" />
            <div className="time-date">
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
          <a href="#" className="slider-item">
            <h5>بهترین مسواک برقی بازار [دی 1403]</h5>
            <img
              src="assets/images/blog/toothbrush.jpg"
              alt="electronic toothbrushes"
            />
            <div className="time-date">
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
          <a href="#" className="slider-item">
            <h5>بهترین پردازنده [دی 1403]</h5>
            <img src="assets/images/blog/cpus.jpg" alt="some cpus" />
            <div className="time-date">
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

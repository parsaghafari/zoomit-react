import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import latestImg1 from '../../assets/images/latest-videos/galaxy-s25-ultra-expectations.webp';
import latestImg2 from '../../assets/images/latest-videos/cover-1.webp';
import latestImg3 from '../../assets/images/latest-videos/ces-2025.webp';
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
          <div className={styles.card}>
            <a href="#" className={styles.card_picture}>
              <i className="fa-solid fa-circle-play"></i>
              <img src={latestImg1} alt="galaxy s25 ultra expectations" />
            </a>
            <h5 className={styles.title}>
              انتظارات از رویداد معرفی سری اس ۲۵ سامسونگ و دورهمی زومیت
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <a href="#" className={styles.card_picture}>
              <i className="fa-solid fa-circle-play"></i>
              <img src={latestImg3} alt="ces 2025" />
            </a>
            <h5 className={styles.title}>
              ۱۰ فناوری برتر امسال که آینده رو تغییر می‌دن
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <a href="#" className={styles.card_picture}>
              <i className="fa-solid fa-circle-play"></i>
              <img src={latestImg2} alt="zoomit meetup" />
            </a>
            <h5 className={styles.title}>
              اولین دورهمی حضوری زومیت؛ گردهمایی بزرگ عاشقان فناوری 🎉
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LatestVideos;

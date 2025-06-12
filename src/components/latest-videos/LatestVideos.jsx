import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
      >
        <SwiperSlide />
      </Swiper>
    </div>
  );
}

export default LatestVideos;

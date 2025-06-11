import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './EditorsChoice.module.css';
import articleImg1 from '../../assets/images/editors-choice/google-analytics.webp';
import articleImg2 from '../../assets/images/editors-choice/asus-blocked-iranian-access.webp';
import articleImg3 from '../../assets/images/editors-choice/dell-ces-2025-alienware-area-51-laptop.webp';
import articleImg4 from '../../assets/images/editors-choice/samsung_galaxy_s24.webp';

function EditorsChoice() {
  return (
    <section className={styles.editors_choice}>
      <div className="section-container">
        <div className={styles.content}>
          <h2>پیشنهاد سردبیر</h2>
          <div className={styles.type}>
            <button className="btn selected">مطلب</button>
            <button className="btn">ویدیو</button>
          </div>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            navigation={true}
            modules={[Navigation, Scrollbar]}
            className={styles.swiper}
            slidesPerView={4}
          >
            <SwiperSlide>
              <div className={styles.card}>
                <a href="#" className={styles.card_picture}>
                  <img src={articleImg1} alt="google analytics" />
                </a>
                <a href="#" className={styles.card_title}>
                  <h4>تحریم کاربران ایرانی توسط گوگل؛ صدای پای ترامپ می‌آید</h4>
                </a>
                <div className={styles.info}>
                  <span className={styles.c_count}>
                    <i className="fa-regular fa-comment"></i> 115
                  </span>
                  <span className={styles.when}>
                    <i className="fa-regular fa-calendar"></i> 2 روز پیش
                  </span>
                  <button className={styles.actions}>
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <a href="#" className={styles.card_picture}>
                  <img
                    src={articleImg2}
                    alt="asus blocking iranian access to website"
                  />
                </a>
                <a href="#" className={styles.card_title}>
                  <h4>
                    دسترسی کاربران ایرانی به وب‌سایت و دانلودسنتر ایسوس مسدود شد
                    [برخی ISP-ها با تغییر DNS دسترسی را فراهم کردند]
                  </h4>
                </a>
                <div className={styles.info}>
                  <span className={styles.c_count}>
                    <i className="fa-regular fa-comment"></i> 200
                  </span>
                  <span className={styles.when}>
                    <i className="fa-regular fa-calendar"></i>5 دقیقه پیش
                  </span>
                  <button className={styles.actions}>
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <a href="#" className={styles.card_picture}>
                  <img src={articleImg3} alt="some alienware laptops" />
                </a>
                <a href="#" className={styles.card_title}>
                  <h4>
                    بهترین لپ‌تاپ‌های نمایشگاه CES 2025؛ از محصولی با نمایشگر
                    کشویی تا لپ‌تاپ بسیار باریک ریزر
                  </h4>
                </a>
                <div className={styles.info}>
                  <span className={styles.c_count}>
                    <i className="fa-regular fa-comment"></i> 50
                  </span>
                  <span className={styles.when}>
                    <i className="fa-regular fa-calendar"></i>1 روز پیش
                  </span>
                  <button className={styles.actions}>
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <a href="#" className={styles.card_picture}>
                  <img src={articleImg4} alt="samsung galaxy smartphones" />
                </a>
                <a href="#" className={styles.card_title}>
                  <h4>قیمت سری گلکسی S25 لو رفت؛ هر ۴ گوشی گران‌ می‌شوند</h4>
                </a>
                <div className={styles.info}>
                  <span className={styles.c_count}>
                    <i className="fa-regular fa-comment"></i> 150
                  </span>
                  <span className={styles.when}>
                    <i className="fa-regular fa-calendar"></i>3 روز پیش
                  </span>
                  <button className={styles.actions}>
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default EditorsChoice;

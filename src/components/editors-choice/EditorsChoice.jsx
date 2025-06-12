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
import EditorsChoiceCard from '../editors-choice-card/EditorsChoiceCard';

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
              <EditorsChoiceCard
                cardImg={articleImg1}
                cardTitle={
                  'تحریم کاربران ایرانی توسط گوگل؛ صدای پای ترامپ می‌آید'
                }
                cardCommentsCount={115}
                cardDate={2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <EditorsChoiceCard
                cardImg={articleImg2}
                cardTitle={
                  'دسترسی کاربران ایرانی به وب‌سایت و دانلودسنتر ایسوس مسدود شد ]برخی ISPها دسترسی را با تغییر DNS فراهم کردند['
                }
                cardCommentsCount={60}
                cardDate={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <EditorsChoiceCard
                cardImg={articleImg3}
                cardTitle={
                  'بهترین لپ‌تاپ‌های نمایشگاه CES 2025؛ از محصولی با نمایشگر کشویی تا لپ‌تاپ بسیار باریک ریزر'
                }
                cardCommentsCount={50}
                cardDate={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <EditorsChoiceCard
                cardImg={articleImg4}
                cardTitle={'قیمت سری گلکسی S25 لو رفت؛ هر ۴ گوشی گران‌ می‌شوند'}
                cardCommentsCount={150}
                cardDate={5}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default EditorsChoice;

import styles from './SecondaryNav.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar } from 'swiper/modules';

function SecondaryNav() {
  return (
    <section className={styles.secondary_nav}>
      <div className="section-container">
        <div className={styles.right_side}>
          <h3>با چشم باز خرید کنید</h3>
          <p>زومیت شما را برای انتخاب بهتر و خرید ارزان‌تر راهنمایی می‌کند</p>
          <a href="#">
            ورود به بخش محصولات
            <i className="fa-solid fa-arrow-left"></i>
          </a>
        </div>
        <div className={styles.left_side}>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            navigation={true}
            modules={[Navigation, Scrollbar]}
            className="mySwiper"
            slidesPerView={'7'}
            spaceBetween={30}
          >
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://img.icons8.com/fluency-systems-regular/100/ffffff/iphone.png"
                  alt="iphone"
                />
                <span>گوشی</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://img.icons8.com/windows/100/ffffff/ipad.png"
                  alt="ipad"
                />
                <span>تبلت</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://img.icons8.com/windows/100/ffffff/laptop.png"
                  alt="laptop"
                />
                <span>لپ تاپ</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <a href="#">
                <img
                  src="https://img.icons8.com/windows/100/ffffff/tv.png"
                  alt="tv"
                />
                <span>تلویزیون</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <a href="#">
                <img
                  src="https://img.icons8.com/ios/100/ffffff/apple-watch.png"
                  alt="apple-watch"
                />
                <span>ساعت هوشمند</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <a href="#">
                <img
                  src="https://img.icons8.com/windows/100/ffffff/headphones.png"
                  alt="headphones"
                />
                <span>هدفون</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://img.icons8.com/dotty/100/ffffff/hdd.png"
                  alt="hdd"
                />
                <span>هارد</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <a href="#">
                <img
                  src="https://img.icons8.com/parakeet-line/100/ffffff/controller.png"
                  alt="gamepad"
                />
                <span>کنسول بازی</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://img.icons8.com/wired/100/ffffff/video-card.png"
                  alt="video-card"
                />
                <span>کارت گرافیک</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <a href="#">
                <img
                  src="https://img.icons8.com/material-outlined/100/ffffff/smartphone-cpu.png"
                  alt="cpu"
                />
                <span>پردازنده</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://img.icons8.com/material-outlined/100/ffffff/monitor.png"
                  alt="monitor"
                />
                <span>مانیتور</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://img.icons8.com/parakeet-line/100/ffffff/ssd.png"
                  alt="ssd"
                />
                <span>SSD</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <a href="#">
                <img
                  src="https://img.icons8.com/windows/100/ffffff/camera--v1.png"
                  alt="camera"
                />
                <span>دوربین</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/100/ffffff/external-power-bank-energy-nawicon-detailed-outline-nawicon.png"
                  alt="external power bank"
                />
                <span>پاوربانک</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <a href="#">
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/100/ffffff/external-charger-electronics-xnimrodx-lineal-xnimrodx.png"
                  alt="charger"
                />
                <span>شارژر</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://img.icons8.com/carbon-copy/100/ffffff/speaker/subwoofer.png"
                  alt="speaker"
                />
                <span>اسپیکر</span>
              </a>
            </SwiperSlide>
          </Swiper>
          {/* <button className="scroll-right">
            <i className="fa-solid fa-angle-right"></i>
          </button> */}
          {/* <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/100/ffffff/iphone.png"
                    alt="iphone"
                  />
                  <span>گوشی</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/windows/100/ffffff/ipad.png"
                    alt="ipad"
                  />
                  <span>تبلت</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/windows/100/ffffff/laptop.png"
                    alt="laptop"
                  />
                  <span>لپ تاپ</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/windows/100/ffffff/tv.png"
                    alt="tv"
                  />
                  <span>تلویزیون</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/ios/100/ffffff/apple-watch.png"
                    alt="apple-watch"
                  />
                  <span>ساعت هوشمند</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/windows/100/ffffff/headphones.png"
                    alt="headphones"
                  />
                  <span>هدفون</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/dotty/100/ffffff/hdd.png"
                    alt="hdd"
                  />
                  <span>هارد</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/parakeet-line/100/ffffff/controller.png"
                    alt="gamepad"
                  />
                  <span>کنسول بازی</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/wired/100/ffffff/video-card.png"
                    alt="video-card"
                  />
                  <span>کارت گرافیک</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/material-outlined/100/ffffff/smartphone-cpu.png"
                    alt="cpu"
                  />
                  <span>پردازنده</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/material-outlined/100/ffffff/monitor.png"
                    alt="monitor"
                  />
                  <span>مانیتور</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/parakeet-line/100/ffffff/ssd.png"
                    alt="ssd"
                  />
                  <span>SSD</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/windows/100/ffffff/camera--v1.png"
                    alt="camera"
                  />
                  <span>دوربین</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/100/ffffff/external-power-bank-energy-nawicon-detailed-outline-nawicon.png"
                    alt="external power bank"
                  />
                  <span>پاوربانک</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/100/ffffff/external-charger-electronics-xnimrodx-lineal-xnimrodx.png"
                    alt="charger"
                  />
                </a>
                <span>شارژر</span>
              </li>
              <li className="nav-item">
                <a href="#">
                  <img
                    src="https://img.icons8.com/carbon-copy/100/ffffff/speaker/subwoofer.png"
                    alt="speaker"
                  />
                  <span>اسپیکر</span>
                </a>
              </li>
            </ul>
          </nav> */}
          {/* <button className="scroll-left">
            <i className="fa-solid fa-angle-left"></i>
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default SecondaryNav;

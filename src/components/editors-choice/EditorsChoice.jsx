import styles from './EditorsChoice.module.css';

function EditorsChoice() {
  return (
    <section className={styles.editors_choice}>
      <div className="section-container">
        <div className={styles.content}>
          <h2>پیشنهاد سردبیر</h2>
          <div className="type">
            <button>مطلب</button>
            <button>ویدیو</button>
          </div>
          <div className="slider-container">
            <button className="scroll-right">
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <div className="slider">
              <div className="card">
                <a href="#" className="card-picture">
                  <img
                    src="assets/images/blog/google-analytics.webp"
                    alt="google analytics"
                  />
                </a>
                <a href="#" className="card-title">
                  <h4>تحریم کاربران ایرانی توسط گوگل؛ صدای پای ترامپ می‌آید</h4>
                </a>
                <div className="info">
                  <span className="c-count">
                    <i className="fa-regular fa-comment"></i> 115
                  </span>
                  <span className="when">
                    <i className="fa-regular fa-calendar"></i> 2 روز پیش
                  </span>
                  <button className="actions">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
              <div className="card">
                <a href="#" className="card-picture">
                  <img
                    src="assets/images/blog/asus-blocked-iranian-access.webp"
                    alt="asus blocking iranian access to website"
                  />
                </a>
                <a href="#" className="card-title">
                  <h4>
                    دسترسی کاربران ایرانی به وب‌سایت و دانلودسنتر ایسوس مسدود شد
                    [برخی ISP-ها با تغییر DNS دسترسی را فراهم کردند]
                  </h4>
                </a>
                <div className="info">
                  <span className="c-count">
                    <i className="fa-regular fa-comment"></i> 200
                  </span>
                  <span className="when">
                    <i className="fa-regular fa-calendar"></i>5 دقیقه پیش
                  </span>
                  <button className="actions">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
              <div className="card">
                <a href="#" className="card-picture">
                  <img
                    src="assets/images/blog/dell-ces-2025-alienware-area-51-laptop.webp"
                    alt="some alienware laptops"
                  />
                </a>
                <a href="#" className="card-title">
                  <h4>
                    بهترین لپ‌تاپ‌های نمایشگاه CES 2025؛ از محصولی با نمایشگر
                    کشویی تا لپ‌تاپ بسیار باریک ریزر
                  </h4>
                </a>
                <div className="info">
                  <span className="c-count">
                    <i className="fa-regular fa-comment"></i> 50
                  </span>
                  <span className="when">
                    <i className="fa-regular fa-calendar"></i>1 روز پیش
                  </span>
                  <button className="actions">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
              <div className="card">
                <a href="#" className="card-picture">
                  <img
                    src="assets/images/blog/samsung_galaxy_s24.webp"
                    alt="samsung galaxy smartphones"
                  />
                </a>
                <a href="#" className="card-title">
                  <h4>قیمت سری گلکسی S25 لو رفت؛ هر ۴ گوشی گران‌ می‌شوند</h4>
                </a>
                <div className="info">
                  <span className="c-count">
                    <i className="fa-regular fa-comment"></i> 150
                  </span>
                  <span className="when">
                    <i className="fa-regular fa-calendar"></i>3 روز پیش
                  </span>
                  <button className="actions">
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
            </div>
            <button className="scroll-left">
              <i className="fa-solid fa-angle-left"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorsChoice;

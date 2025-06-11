import styles from './EditorsChoiceCard.module.css';

function EditorsChoiceCard(props) {
  return (
    <div className={styles.card}>
      <a href="#" className={styles.card_picture}>
        <img src={props.cardImg} alt="google analytics" />
      </a>
      <a href="#" className={styles.card_title}>
        <h4>{props.cardTitle}</h4>
      </a>
      <div className={styles.info}>
        <span className={styles.c_count}>
          <i className="fa-regular fa-comment"></i> {props.cardCommentsCount}
        </span>
        <span className={styles.when}>
          <i className="fa-regular fa-calendar"></i> {props.cardDate} روز پیش
        </span>
        <button className={styles.actions}>
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    </div>
  );
}

export default EditorsChoiceCard;

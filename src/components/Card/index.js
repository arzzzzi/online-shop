import styles from './Card.module.scss';

console.log(styles)

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unliked.svg" alt="Unlike" />
      </div>
      <img width={133} height={112} src={props.imgUrl} />
      <h5>{props.title}</h5>
      <div className="cardBtn">
        <div className="crdBtn">
          <span>Цена: </span>
          <b>{props.price} руб.</b>
        </div>
        <button onClick={props.onClick} className="button">
          <img width={11} height={11} src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png" />
        </button>
      </div>
    </div>
  )
}
export default Card; 
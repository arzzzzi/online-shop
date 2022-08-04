import React from 'react';
import styles from './Card.module.scss';


function Card(props) {
  const [added, setAdded] = React.useState(false);

  const handlePlus = () => {
    setAdded(!added)
  };

  React.useEffect(() => {
    console.log('перем')},
    [added]
  )

  return (
    <div className={styles.card}>
      <div onClick={props.favoriteClick} className={styles.favorite}>
        <img src="/img/unliked.svg" alt="Unlike" />
      </div>
      <img width={133} height={112} src={props.imgUrl} />
      <h5>{props.title}</h5>
      <div className="cardBtn">
        <div className="crdBtn">
          <span>Цена: </span>
          <b>{props.price} руб.</b>
        </div>
        <img onClick={handlePlus}
          className={styles.plus}
          width={11} height={11} 
          src={added ? "./img/btn-checked.svg" : "./img/btn-plus.svg"} />
      </div>
    </div>
  )
}
export default Card; 
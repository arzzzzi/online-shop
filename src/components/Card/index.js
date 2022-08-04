import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';


function Card({favoriteClick, imgUrl, title, price, plusClick}) {
  const [added, setAdded] = useState(false);

  const handlePlus = () => {
    plusClick({title, imgUrl, price});
    setAdded(!added)
  };

  useEffect(() => {
    console.log('перем')
  },
    [added]
  )

  return (
    <div className={styles.card}>
      <div onClick={favoriteClick} className={styles.favorite}>
        <img src="/img/unliked.svg" alt="Unlike" />
      </div>
      <img width={133} height={112} src={imgUrl} />
      <h5>{title}</h5>
      <div className="cardBtn">
        <div className="crdBtn">
          <span>Цена: </span>
          <b>{price} руб.</b>
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
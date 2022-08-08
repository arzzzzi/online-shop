import React, { useState } from 'react';
import styles from './Card.module.scss';


function Card({ id, onFavorite, imgUrl, title, price, plusClick, favorited = false, isAdded = false }) {
  const [added, setAdded] = useState(isAdded);
  const [isFavorite, setIsFavorite] = useState(favorited)



  const handlePlus = () => {
    plusClick({ id, title, imgUrl, price });
    setAdded(!added)
  };

  const handleFavorite = () => {
    onFavorite({ id, title, imgUrl, price })
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      <div onClick={handleFavorite} className={styles.favorite}>
        <img
          width={22} height={22}
          src={isFavorite ? '/img/like.png' : '/img/unliked.svg'}
          alt="Unlike"
        />
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
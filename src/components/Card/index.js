import React, { useState, useContext } from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({
  id,
  onFavorite,
  imgUrl,
  title,
  price,
  plusClick,
  favorited = false,
  loading = false
}) {
  const [isFavorite, setIsFavorite] = useState(favorited)
  const { isItemAdded } = useContext(AppContext)
  const object = { id, parentId: id, title, imgUrl, price }

  const handlePlus = () => {
    plusClick(object);
  };

  const handleFavorite = () => {
    onFavorite(object)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      {loading ? <ContentLoader
        speed={2}
        width={165}
        height={250}
        viewBox="0 0 150 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="10" ry="10" width="150" height="130" />
        <rect x="0" y="160" rx="5" ry="5" width="150" height="15" />
        <rect x="0" y="180" rx="5" ry="5" width="100" height="15" />
        <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
        <rect x="115" y="230" rx="10" ry="10" width="35" height="35" />
      </ContentLoader> :
        <>
          {onFavorite &&
            <div onClick={handleFavorite} className={styles.favorite}>
              <img
                width={22} height={22}
                src={isFavorite ? '/img/like.png' : '/img/unliked.svg'}
                alt="Unlike"
              />
            </div>}
          <img width='100%' height={135} src={imgUrl} />
          <h5>{title}</h5>
          <div className="cardBtn">
            <div className="crdBtn">
              <span>Цена: </span>
              <b>{price} руб.</b>
            </div>
            {plusClick &&
              <img onClick={handlePlus}
                className={styles.plus}
                width={11} height={11}
                src={isItemAdded(id) ? "./img/btn-checked.svg" : "./img/btn-plus.svg"} />}
          </div>
        </>}
    </div>
  )
}
export default Card; 
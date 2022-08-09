import React, { useContext } from 'react'
import AppContext from '../context'



const Info = ({ title, description, image }) => {
    const { setCartOpened } = useContext(AppContext)

    return (
        <div className="cartEmpty">
            <img src={image} alt="Empty Cart"
                width={120}  />
            <h2 className="emptyCart">{title}</h2>
            <p>{description}</p>
            <button className="greenButton"
                onClick={() => setCartOpened(false)}>
                <img src="./img/arrow.png" alt='Arrow' />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info

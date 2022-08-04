function Drawer(props) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина <img className="btnRemove" 
                src="/img/btn-remove.svg" alt='Remove' 
                onClick={props.onClose}/>
                </h2>
                <div className="items">
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/img/1.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Труба</p>
                            <b>999 руб.</b>
                        </div>
                        <img className="btnRemove" src="/img/btn-remove.svg" alt='Remove' />
                    </div>
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/img/1.jpg)' }} className="cartItemImg"></div>
                        <div>
                            <p>Труба</p>
                            <b>999 руб.</b>
                        </div>
                        <img className="btnRemove" src="/img/btn-remove.svg" alt='Remove' />
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>1998 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>99,9 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton"><span>Оформить заказ</span> <img className="arrow" src="/img/arrow.png" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;
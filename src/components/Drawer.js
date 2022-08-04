function Drawer({onClose, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина <img className="btnRemove" 
                src="/img/btn-remove.svg" alt='Remove' 
                onClick={onClose}/>
                </h2>
                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem">
                        <div style={{ backgroundImage: `url(${obj.imgUrl})` }} className="cartItemImg"></div>
                        <div>
                            <p>{obj.title}</p>
                            <b>{obj.price}</b>
                        </div>
                        <img className="btnRemove" src="/img/btn-remove.svg" alt='Remove' />
                    </div>
                    ))}
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
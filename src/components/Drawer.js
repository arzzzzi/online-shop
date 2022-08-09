import axios from "axios";
import { useContext, useState } from "react";
import AppContext from "../context";
import Info from "./Info";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onClose, items = [], onRemove }) {
    const [isCompleted, setIsCompleted] = useState(false)
    const { setCartItems, cartItems } = useContext(AppContext);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post('https://62ebdaa155d2bd170e77cf6d.mockapi.io/orders', {
                items: cartItems
            })
            setOrderId(data.id)
            setIsCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i]
                await axios.delete(`https://62ebdaa155d2bd170e77cf6d.mockapi.io/cart/${item.id}`)
                await delay(1000)
            }
        } catch (error) {
            alert('Ошибка при оформлении заказа :(')
        }
        setIsLoading(false)
    }

    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина <img className="btnRemove"
                    src="/img/btn-remove.svg" alt='Remove'
                    onClick={onClose} />
                </h2>
                {items.length > 0 ? (
                    <div className="drawerInner">
                        <div className="items">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem">
                                    <div style={{ backgroundImage: `url(${obj.imgUrl})` }} className="cartItemImg"></div>
                                    <div>
                                        <p>{obj.title}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img className="btnRemove"
                                        src="/img/btn-remove.svg"
                                        alt='Remove'
                                        onClick={() => onRemove(obj.id)} />
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
                            <button disabled={isLoading}
                                onClick={onClickOrder}
                                className="greenButton">
                                <span>Оформить заказ</span>
                                <img className="arrow" src="/img/arrow.png" alt="Arrow" />
                            </button>
                        </div>
                    </div>) : (
                    < Info
                        title={isCompleted ? "Заказ оформлен" : "Корзина пуста"}
                        description={isCompleted ? `Ваш заказ #${orderId} оформлен и будет передан курьеру` : "Добавьте товары в корзину, чтобы сделать заказ"}
                        image={isCompleted ? "./img/ordered.png" : "./img/emptybox.png"} />
                )}
            </div>
        </div>
    )
}

export default Drawer;
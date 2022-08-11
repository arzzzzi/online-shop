import AppContext from "../context";
import { useContext } from "react";

export const useCart = () => {
    const { setCartItems, cartItems } = useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0)
    return { cartItems, setCartItems, totalPrice }
}
import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";


function Orders() {
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://62ebdaa155d2bd170e77cf6d.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert('Ошибка при выводе заказов')
                console.error(error)
            }
        })()
    }, [])


    return (
        <div className="content">
            <div className="search-block">
                <h1>Мои заказы</h1>
            </div>
            <div className="itemsShop">
                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Card key={index}
                        loading={isLoading}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Orders;
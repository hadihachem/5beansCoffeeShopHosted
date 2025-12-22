import { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/food_del/frontend_assets/assets';
import orderbg from '../../assets/food_del/frontend_assets/ordersBg.jpeg'

const MyOrders = () => {

    const [data, setData] = useState([]);
    const { token } = useContext(StoreContext);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/order/userorders`, {}, { headers: { token } })

            setData(response.data.data);
        }
        catch (err) {

        }
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])



    return (
        <>
            <div className='my-orders'>
                <h2 >My Orders</h2>
                <div className="container">
                    {data.map((order, index) => {
                        return (
                            <div key={index} className="my-orders-order">
                                <img src={assets.parcel_icon} alt="" />
                                <p>
                                    {order.items.map((item, itemIndex) => (
                                        <span key={itemIndex}>
                                            <span>{itemIndex + 1}) </span> {item.name} {item.quantity}x
                                            <br />
                                        </span>
                                    ))}
                                </p>
                                <p>${order.amount}</p>
                                <p>Items: {order.items.length}</p>
                                <p>
                                    <span>&#x25cf;</span> <b>{order.status}</b>
                                </p>
                                <button onClick={fetchOrders}>Track Order</button>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    )
}

export default MyOrders
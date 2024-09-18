// ExampleComponent.js
import React, { useState, useEffect } from 'react';
import Orders from "./Orders"

const OrderList = () => {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]); // State to store fetched data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State to track any error

    // Fetch data from data.json
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json'); // Fetch the data.json file from the public folder
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData); // Store the data in the state
                setLoading(false); // Set loading to false after data is fetched
            } catch (err) {
                setError(err.message); // Handle error if any
                setLoading(false);
            }
        };

        fetchData(); // Call the fetch function when the component mounts
    }, []);

    // Handle the loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Handle any error that occurred during fetching
    if (error) {
        return <div>Error: {error}</div>;
    }

    const addToCart = (purchased) => {
        setCart([...cart, purchased]);
    };

    const removeFromCart = (purchased) => {
        setCart(cart.filter(item => item.id !== purchased.id)); // Compare by item.id
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <div className="orders-container">
                {data.map((order) => (
                    <Orders 
                        key={order.id}  
                        price={order.price} 
                        category={order.category} 
                        name={order.name} 
                        image={order.image.thumbnail} 
                        action={() => addToCart(order)} />
                ))}
            </div>

            <div className="cart">
                <div>
                    <h2 className='cart-title'>Cart Items</h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id}>
                                <p>{item.name || "Unknown Product"}</p>
                                <p>Price: ${item.price}</p>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        ))
                    )}
                </div>

                <div>
                    <p>
                        <h4 className='order-total'>Order Total</h4>
                        <h2 className='cart-price'>${calculateTotal()}</h2>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OrderList;

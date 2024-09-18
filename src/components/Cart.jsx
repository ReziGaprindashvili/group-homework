import React, { useState } from 'react';

// Exporting the addToCart function separately
export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return { cart, addToCart, removeFromCart, calculateTotal };
};

const Cart = () => {
  const { cart, addToCart, removeFromCart, calculateTotal } = useCart();

  return (
    <div className="cart">
      <div>
        <h2 className='cart-title'>Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))
        )}
      </div>

      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default Cart;

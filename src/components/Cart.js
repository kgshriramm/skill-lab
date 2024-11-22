import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeItem }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ₹{item.price} 
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button className="checkout">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import "./../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { name: "Pizza", quantity: 1, price: 999 },
    { name: "Brownies", quantity: 2, price: 59 },
  ]);

  const updateQuantity = (index, value) => {
    const newCart = [...cartItems];
    newCart[index].quantity += value;
    if (newCart[index].quantity <= 0) newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
              </div>
              <div className="cart-controls">
                <button onClick={() => updateQuantity(index, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(index, 1)}>+</button>
              </div>
            </div>
          ))}
          <h3 className="total">Total: ₹{getTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;

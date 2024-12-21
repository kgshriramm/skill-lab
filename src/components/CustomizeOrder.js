import React, { useState } from "react";
import "./../styles/CustomizeOrder.css";

const CustomizeOrder = () => {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");

  return (
    <div className="customize-order">
      <h1>Customize Your Order</h1>
      <div className="form-group">
        <label>Food Item:</label>
        <select>
          <option value="Pizza">Pizza</option>
          <option value="Pasta">Pasta</option>
          <option value="Burger">Burger</option>
        </select>
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <div className="quantity-controls">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      </div>
      <div className="form-group">
        <label>Special Instructions:</label>
        <textarea
          placeholder="Add any special instructions for your order..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
      </div>
      <button className="submit-btn">Add to Cart</button>
    </div>
  );
};

expo

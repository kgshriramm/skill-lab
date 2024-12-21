import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>FoodSync</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><a href="#auth-container">Login/Sign Up</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

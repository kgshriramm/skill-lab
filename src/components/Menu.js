import React from "react";
import "../styles/Menu.css"; // Make sure the CSS file is in the same folder

const Menu = () => {
  const menuItems = [
    { name: "Pasta", price: "₹200", img: "pasta.jpg" },
    { name: "Pizza", price: "₹999", img: "pizza.jpg" },
    { name: "Salad", price: "₹200", img: "salad.jpg" },
    { name: "Soup", price: "₹100", img: "soup.jpeg" },
    { name: "Ice Cream", price: "₹99", img: "icecream.jpg" },
    { name: "Brownies", price: "₹59", img: "brownies.jpg" },
  ];

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

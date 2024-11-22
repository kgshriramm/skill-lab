import React from 'react';
import './Categories.css';
import CakeCard from '../components/CakeCard';

const Categories = () => {
  const categories = [
    {
      title: 'Chocolate Cakes',
      cakes: [
        { id: 1, name: 'Dark Chocolate Cake', price: 700, image: './assets/dark-chocolate.jpg' },
        { id: 2, name: 'Milk Chocolate Cake', price: 650, image: './assets/milk-chocolate.jpg' },
      ],
    },
    {
      title: 'Fruit Cakes',
      cakes: [
        { id: 3, name: 'Mixed Fruit Cake', price: 500, image: './assets/mixed-fruit.jpg' },
        { id: 4, name: 'Pineapple Cake', price: 450, image: './assets/pineapple.jpg' },
      ],
    },
    {
      title: 'Custom Cakes',
      cakes: [
        { id: 5, name: 'Wedding Cake', price: 2000, image: './assets/wedding-cake.jpg' },
        { id: 6, name: 'Birthday Cake', price: 1200, image: './assets/birthday-cake.jpg' },
      ],
    },
  ];

  return (
    <div className="categories">
      <h1>Our Cake Categories</h1>
      {categories.map((category, index) => (
        <section key={index} className="category-section">
          <h2>{category.title}</h2>
          <div className="cake-grid">
            {category.cakes.map(cake => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Categories;

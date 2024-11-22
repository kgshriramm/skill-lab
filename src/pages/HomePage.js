import React from 'react';
import './HomePage.css';
import CakeCard from '../components/CakeCard';

const HomePage = () => {
  const featuredCakes = [
    { id: 1, name: 'Chocolate Cake', price: 500, image: './assets/chocolate.jpg' },
    { id: 2, name: 'Vanilla Cake', price: 400, image: './assets/vanilla.jpg' },
    { id: 3, name: 'Red Velvet Cake', price: 600, image: './assets/redvelvet.jpg' },
  ];

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Sweet Delights</h1>
        <p>Your one-stop destination for delicious cakes!</p>
      </header>
      <section className="featured-cakes">
        <h2>Featured Cakes</h2>
        <div className="cake-grid">
          {featuredCakes.map(cake => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

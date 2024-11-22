import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Sweet Delights</h1>
      <section className="about-section">
        <img src="./assets/bakery.jpg" alt="Bakery" />
        <div className="about-content">
          <p>
            Welcome to Sweet Delights, your trusted destination for handcrafted cakes made with love and care.
            Our journey began with a passion for baking and a commitment to bring joy to every celebration.
          </p>
          <p>
            From classic chocolate cakes to custom designs, we use only the finest ingredients to ensure
            exceptional quality and taste. Our team of skilled bakers and decorators is dedicated to making
            your moments special.
          </p>
          <p>
            Thank you for choosing Sweet Delights. We are honored to be part of your life's sweetest occasions!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

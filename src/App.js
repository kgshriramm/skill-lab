import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

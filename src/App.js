import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Auth from "./components/Auth"; // Integrated Auth (Login/Signup)
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
          <div className="auth-container">
            <Auth />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

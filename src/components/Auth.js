import React, { useState } from "react";
import "./../styles/Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form>
        {!isLogin && (
          <>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </>
        )}
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
        {!isLogin && (
          <>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />
          </>
        )}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={toggleAuthMode} className="toggle-link">
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default Auth;

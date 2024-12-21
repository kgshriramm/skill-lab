import React from "react";
import "../styles/Feedback.css";

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h1>We Value Your Feedback</h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Message:</label>
        <textarea placeholder="Enter your feedback" required></textarea>
        <label>Rating:</label>
        <select required>
          <option value="">Select a rating</option>
          <option value="5">Excellent</option>
          <option value="4">Good</option>
          <option value="3">Average</option>
          <option value="2">Poor</option>
          <option value="1">Very Poor</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;

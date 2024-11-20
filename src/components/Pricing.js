import React from "react";
import "./styles/Pricing.css";

const Pricing = () => {
    const redirectToPlan = () => {
        window.location.href = "https://razorpay.me/@darkhub"; // Replace with your URL
      };
  return (
    <section className="pricing-section">
      <h1 className="pricing-heading">Our Monthly Plans</h1>
      <div className="pricing-container">
        {/* Basic Plan */}
        <div className="pricing-card">
          <h2 className="plan-title">Basic</h2>
          <p className="price">₹200<span>/month</span></p>
          <ul className="features">
            <li>10 Designes</li>
            <li>Basic Support</li>
            <li>Access to Community</li>
          </ul>
          <button className="btn" onClick={redirectToPlan}>Choose Plan</button>
        </div>
        {/* Pro Plan */}
        <div className="pricing-card">
          <h2 className="plan-title">Pro</h2>
          <p className="price">₹500<span>/month</span></p>
          <ul className="features">
            <li>Unlimited Designes</li>
            <li>Priority Support</li>
            <li>Access to All Features</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>
        {/* Premium Plan */}
        <div className="pricing-card">
          <h2 className="plan-title">Premium</h2>
          <p className="price">₹1000<span>/month</span></p>
          <ul className="features">
            <li>Unlimited Designes</li>
            <li>24/7 Support</li>
            <li>Exclusive Features</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

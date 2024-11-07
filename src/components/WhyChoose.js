import React from 'react';
import { motion } from 'framer-motion';
import { FaDollarSign, FaHeadset, FaCogs } from 'react-icons/fa';
import './styles/WhyChoose.css';

const WhyChoose = () => {
  const options = [
    { id: 1, icon: <FaDollarSign />, title: "Budget Friendly", description: "Affordable pricing" },
    { id: 2, icon: <FaHeadset />, title: "24/7 Support", description: "Always available" },
    { id: 3, icon: <FaCogs />, title: "Top Quality Plans", description: "Premium features" },
    
  ];

  return (
    <div className="why-choose-section">
      <h2 className="section-heading">Why Choose Us</h2>
      <div className="options-container">
        {options.map((option) => (
          <motion.div
            key={option.id}
            className="option-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: option.id * 0.2 }}
          >
            <div className="icon-container">
              {option.icon}
            </div>
            <h3 className="option-title">{option.title}</h3>
            <p className="option-description">{option.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;

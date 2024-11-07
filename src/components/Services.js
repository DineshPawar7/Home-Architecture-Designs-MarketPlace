import React from 'react';
import { motion } from 'framer-motion';
import './styles/Services.css';

const services = [
  { id: 1, title: "Home Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i1jpJLXqxV-RpdvAe0yT2l-NdXgpq8UBCQ&s" },
  { id: 2, title: "Office Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFFWRZHjNJJoDAJtSWxampNoRbs1vg9Rf9A&s" },
  { id: 3, title: "Shop Designs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtim1bELlwAkWpb9df8FbQLXDFFy7Pp2hRAA&s" }
];

const Services = () => {
  return (
    <div className="services-section">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-container">
        {services.map(service => (
          <motion.div
            key={service.id}
            className="service-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;

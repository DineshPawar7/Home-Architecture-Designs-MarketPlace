import React from 'react';
import Homephoto from '../assets/home-photo.png';
import './styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="heading bg-color">Let's</h1>
        <h1 className="heading">Explore</h1>
        <h1 className="heading bg-color">Unique</h1>
        <h1 className="heading">Designs</h1>
        <p className="description">
        Discover unique architectural designs tailored for your dream home
        </p>
      </div>
      <div className="right-section">
        <img 
          src={Homephoto} 
          alt="Homepage" 
          className="image" 
        />
      </div>
    </div>
  );
};

export default Homepage;

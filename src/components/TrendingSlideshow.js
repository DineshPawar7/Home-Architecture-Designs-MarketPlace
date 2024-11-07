// TrendingSlideshow.js

import React, { useState, useEffect } from 'react';
import './styles/TrendingSlideshow.css'; // We will add styles in the next step

const images = [
  { src: 'https://www.shutterstock.com/image-illustration/road-network-housing-society-design-260nw-2175058177.jpg', desc: 'Beautiful Nature Scene' },
  { src: 'https://www.shutterstock.com/image-illustration/road-network-housing-society-design-260nw-2175058177.jpg', desc: 'Urban City Vibes' },
  { src: 'https://www.shutterstock.com/image-illustration/road-network-housing-society-design-260nw-2175058177.jpg', desc: 'Modern Architecture' },
  // Add more images as needed
];

const TrendingSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slideshow-container">
      <h2 className="slideshow-heading">Trending</h2>

      <div className="slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide fade ${currentIndex === index ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.desc} />
            <div className="description">{image.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSlideshow;

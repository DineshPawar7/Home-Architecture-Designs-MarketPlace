import React from 'react';
import { motion } from 'framer-motion';
import './styles/specialItems.css';

const specialItems = [
  { id: 1, image: "https://media.designcafe.com/wp-content/uploads/2024/06/26105141/modern-small-kitchen-ideas-with-lighting.jpg", description: "Kitchen Design" },
  { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccdqLliEDjrgg_a9uW6n0b_OsgXEOcorjvw&s", description: "Bedroom Design" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQKXBkjZ0LhvZisLI4VKsXHn0WCLwGpYb4Q&s", description: "Hall Design" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHCr1TPbgjugzwcJ1FVrx7Su-ryH3qYAweQ&s", description: "Office Design" },
  { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpGNZ0EeMTsjGak9GLFT3atKghgOorzst7g&s", description: "Farmhouse Design" },
  { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQdf4zjLIbP71xY28dSZQ9PlmOEEmavPJlQ&s", description: "2BHK Design" },
  { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmspIma0G5w4Uii4louGM8Qy6dv0uhcMsOQw&s", description: "Low Space House Design" },
  { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvsc9pEWeEjAGBq_NHP1H47zLImA9EkROCQ&s", description: "Family House Design" },
  { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPL-2cjYm-qyjus1C_1M0BX7Xme9ny3DC9g&s", description: "Society House Design" }
];

const SpecialSection = () => {
  return (
    <div className="special-section">
      <h2 className="special-heading">Our Special Offerings</h2>
      <div className="special-grid">
        {specialItems.map((item) => (
          <motion.div
            key={item.id}
            className="special-item"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={item.image} alt={`Special ${item.id}`} className="special-image" />
            <p className="special-description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpecialSection;

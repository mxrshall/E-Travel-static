import { motion } from 'framer-motion';
import { useState } from 'react';

const MapMarker = ({ id, title, description, background, x, y, flag, tag, slider, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover({ title, description });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover({ title: '', description: '' });
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        width="50px"
        height="50px"
        viewBox="0 0 1024 1024"
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        style={{
          position: 'absolute',
          top: `${y}%`,
          left: `${x}%`,
        }}
      >
        <path 
          d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" 
          fill="#ff0000"
        />
      </motion.svg>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -15 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            position: 'absolute',
            top: `${y - 5}%`,
            left: `${x}%`,
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
          }}
        >
          {title}
        </motion.div>
      )}
    </>
  );
};

export default MapMarker;

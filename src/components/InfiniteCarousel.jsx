//  Tried To Create an Infinite Crousal Using Framer
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

import jacketProducts from '../data/jacketProducts';

const doubledCards = [...jacketProducts, ...jacketProducts];

const InfiniteCarousel = () => {
  const controls = useAnimation();
  const xRef = useRef(0);

  const startAutoplay = (fromX = xRef.current) => {
    controls.start({
      x: [fromX, fromX - 1500],
      transition: {
        duration: 8,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    startAutoplay();
  }, []);

  return (
    <div className="overflow-hidden w-full h-full py-6">
      <motion.div
        className="flex gap-6 mt-10 mb-20 cursor-grab active:cursor-grabbing select-none"
        animate={controls}
        drag="x"
        dragConstraints={{ left: -3000, right: 0 }}
        dragElastic={0.05}
        onUpdate={(latest) => {
          if (typeof latest.x === 'number') {
            xRef.current = latest.x;
          }
        }}
        onDragStart={() => controls.stop()}
        onDragEnd={() => startAutoplay(xRef.current)}
        style={{ width: 'max-content' }}
      >
        {doubledCards.map((card, idx) => (
          <div
            key={idx}
            className="min-w-[250px] bg-white rounded-lg p-4 text-center hover:scale-105 transition-transform"
          >
            <Link to={`/product/${card.id}`}>
              <img
                src={card.image}
                alt={card.title}
                draggable={false}
                className="w-full h-[85%] object-cover rounded-md mb-2 cursor-pointer"
              />
            </Link>
            <h2 className="font-semibold text-lg">{card.title}</h2>
            <div className="flex gap-4 justify-center mt-2">
              <span className="text-gray-500 line-through text-sm">{card.price}</span>
              <span className="text-red-600 font-semibold text-base">{card.dprice}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
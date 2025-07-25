// Product Card Ui gonna render in ProductSection.jsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const ProductCard = ({ product, context }) => {
  const destination =
    context === 'home' ? '/products' : `/product/${product.id}`;

  return (
    <motion.div
      variants={cardVariants}
      className="p-4 bg-white my-10 rounded-lg transition"
    >
      <Link to={destination}>
        <motion.img
          src={product.image}
          alt={product.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>

      {context === 'products' && (
        <p className="text-gray-600 font-medium mt-1">₹{product.priceValue}</p>
      )}

      <Link
        to={destination}
        className="text-blue-500 hover:underline mt-2 inline-block text-sm"
      >
        {context === 'home' ? 'Explore More' : 'View Details'}
      </Link>
    </motion.div>
  );
};

export default ProductCard;

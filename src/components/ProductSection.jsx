import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import products from '../data/products';

const categories = [
  'All', 'T-Shirt', 'Jogger', 'Pant', 'Shirt',
  'Shorts', 'Polo', 'Hoodie', 'Jacket'
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const ProductSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const smartMatch = (product, query) => {
    if (!query.trim()) return true;
    const searchableContent = (
      product.name + ' ' +
      product.category + ' ' +
      product.description
    ).toLowerCase();

    const queryWords = query.toLowerCase().split(/\s+/).filter(Boolean);
    return queryWords.some(word => searchableContent.includes(word));
  };

  const filteredProducts = products
    .filter(p => smartMatch(p, searchQuery))
    .filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="px-10 pt-10 space-y-10 bg-white">
      {/* 🔍 Search Input */}
      <div className="space-y-6 pb-1">
        <div className="relative flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[90%] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="mt-3 ml-5 text-gray-400 text-lg">🔎</span>
        </div>

        {/* 🧠 Category Filter */}
        <div className="p-4 rounded-lg">
          <h3 className="font-semibold mb-3 text-gray-800">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 hover:bg-blue-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 🛍️ Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              context="products"
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 text-lg">
            No products match your search 💔
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProductSection;
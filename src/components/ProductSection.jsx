// product section , Product card yaha render hoga + include Search feature + Filter by Category 

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import products from '../data/products';

const getCategories = (products) => {
  const cats = products.map(p => (p.category || '').replace(/[-_]/g, ' ').trim());
  const unique = Array.from(new Set(cats.map(cat => cat.toLowerCase())));
  return ['All', ...unique.map(cat =>
    cat.replace(/\b\w/g, l => l.toUpperCase())
  )];
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const ProductSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  
  
  const normalizeSearch = str => (str || '').replace(/[-_\s]/g, '').toLowerCase();

  const smartMatch = (product, query) => {
    if (!query.trim()) return true;
    
    const fields = [
      product.name,
      product.category,
      product.description,
      ...(product.tags || []),
      product.material || ''
    ];
    const normalizedFields = fields.map(normalizeSearch);
   
    const queryWords = query.split(/\s+/).filter(Boolean).map(normalizeSearch);
    
    return queryWords.some(word =>
      normalizedFields.some(field => field.includes(word))
    );
  };


  const normalize = str => (str || '').replace(/[-_]/g, ' ').trim().toLowerCase();
  const filteredProducts = products
    .filter(p => smartMatch(p, searchQuery))
    .filter(p =>
      activeCategory === 'All' ||
      normalize(p.category) === normalize(activeCategory)
    );

  const categories = getCategories(products);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (activeCategory !== 'All') setActiveCategory('All');
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    if (searchQuery !== '') setSearchQuery('');
  };

  return (
    <div className="px-10 pt-10 space-y-10 bg-white">
    
      <div className="space-y-6 pb-1">
        <div className="relative flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-[90%] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="mt-3 ml-5 text-gray-400 text-lg">🔎</span>
        </div>

        
        <div className="p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-gray-800">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2  text-sm transition-all ${
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
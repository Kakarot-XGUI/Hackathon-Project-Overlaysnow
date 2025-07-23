// Product description Page ALl data collect here only

import { useParams } from 'react-router-dom';
import products from '../data/products';
import homeProducts from '../data/homeProducts';
import jacketProducts from '../data/jacketProducts';

const allProducts = [
  
  ...products.map(p => ({
    id: p.id,
    name: p.name,
    image: p.image,
    price: p.price,
    priceValue: p.priceValue,
    category: p.category || 'Uncategorized',
    tags: p.tags || [],
    gallery: [p.image, p.image, p.image, p.image],
    description: p.description || `The ${p.name} is built to elevate your wardrobe with effortless style and comfort.`,
    rating: p.rating || 4.4,
    review: p.review || 'Feels solid. Would definitely grab again.',
    material: p.material || 'Cotton Blend',
    fit: p.fit || 'Regular Fit',
    delivery: p.delivery || 'Delivery: 3–5 business days'
  })),

  ...homeProducts.map(p => ({
    id: p.id,
    name: p.name,
    image: p.image,
    price: p.price,
    priceValue: p.priceValue,
    category: p.category || 'Uncategorized',
    tags: p.tags || [],
    gallery: [p.image, p.image, p.image, p.image],
    description: p.description || `Designed for comfort and versatility, the ${p.name} is a wardrobe essential.`,
    rating: p.rating || 4.5,
    review: p.review || 'Looks good, feels even better. Will recommend.',
    material: p.material || 'Soft Weave',
    fit: p.fit || 'Standard Fit',
    delivery: p.delivery || 'Delivery: 2–4 business days'
  })),

  
  ...jacketProducts.map(j => ({
    id: j.id,
    name: j.title,
    image: j.image,
    price: j.dprice || j.price,
    priceValue: j.priceValue || 0,
    category: j.category || 'Jacket',
    tags: j.tags || [],
    gallery: [j.image, j.image, j.image, j.image],
    description: j.description || `The ${j.title} is a statement piece crafted for both functionality and flair.`,
    rating: j.rating || 4.7,
    review: j.review || 'Impressive quality and fit. Eye-catching and practical.',
    material: j.material || 'Thermal Shell',
    fit: j.fit || 'Tailored Fit',
    delivery: j.delivery || 'Delivery: 3–5 business days'
  }))
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === id);

  return product ? (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-[15vh] mb-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* 📸 Left – Thumbnail Column */}
        <div className="hidden md:flex flex-col gap-8">
          {product.gallery?.slice(0, 4).map((imgSrc, i) => (
            <div
              key={i}
              className="w-[80px] h-full overflow-hidden rounded-lg border hover:border-blue-500 transition"
            >
              <img
                src={imgSrc}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* 🖼 Center – Main Image */}
        <div className="flex-shrink-0 w-full md:w-[30%]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* 📋 Right – Product Info */}
        <div className="flex-grow space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-700 leading-relaxed text-base">{product.description}</p>

          <div className="text-2xl font-semibold text-red-600">{product.price}</div>

          {/* ⭐ Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 text-yellow-500 font-medium">
              ⭐ {product.rating} / 5
              <span className="text-gray-500 text-sm">(Customer Rated)</span>
            </div>
          )}

          {/* 💬 Review */}
          {product.review && (
            <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-700 italic">
              “{product.review}”
            </blockquote>
          )}

          {/* 📋 Extra Details */}
          <div className="text-sm text-gray-600 space-y-1 pt-4">
            {product.material && <p><strong>Material:</strong> {product.material}</p>}
            {product.fit && <p><strong>Fit:</strong> {product.fit}</p>}
            {product.delivery && <p><strong>{product.delivery}</strong></p>}
          </div>

          {/* 🛍 Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center mt-[20vh] text-red-500 text-xl">
      Product not found. Did Whis erase it from existence? 🕊️
    </div>
  );
};

export default ProductDetails;
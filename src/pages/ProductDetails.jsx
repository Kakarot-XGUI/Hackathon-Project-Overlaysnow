// Product Description Page

import { useParams } from 'react-router-dom';
import products from '../data/products';
import homeProducts from '../data/homeProducts';
import jacketProducts from '../data/jacketProducts';
import i from "../assets/images/1.webp"
import m from "../assets/images/2.webp"
import g from "../assets/images/3.webp"
import c1 from "../assets/images/cir.jpg"
import c2 from "../assets/images/cir2.png"
import c3 from "../assets/images/cir3.png"
import c4 from "../assets/images/cir4.jpg"
import c5 from "../assets/images/cir5.jpg"
import c6 from "../assets/images/cir6.jpg"
import c7 from "../assets/images/cir7.jpg"
import c8 from "../assets/images/cir8.jpg"

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
    <>
      <div className="max-w-7xl mx-auto px-6 py-12 mt-[15vh] mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Vertical Thumbnails */}
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

          {/* Main Product Image */}
          <div className="flex-shrink-0 w-full md:w-[30%]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex-grow space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <p className="text-gray-700 leading-relaxed text-base">
              {product.description}
            </p>

            <div className="text-2xl font-semibold text-red-600">{product.price}</div>

            {product.rating && (
              <div className="flex items-center gap-2 text-yellow-500 font-medium">
                ⭐ {product.rating} / 5
                <span className="text-gray-500 text-sm">(Customer Rated)</span>
              </div>
            )}

            {product.review && (
              <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-700 italic">
                “{product.review}”
              </blockquote>
            )}

            <div className="text-sm text-gray-600 space-y-1 pt-4">
              {product.material && <p><strong>Material:</strong> {product.material}</p>}
              {product.fit && <p><strong>Fit:</strong> {product.fit}</p>}
              {product.delivery && <p><strong>{product.delivery}</strong></p>}
            </div>

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

      
      <div className="return h-auto md:h-[20vh] w-full bg-gray-200 rounded-lg shadow-inner flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 animate-pulse">
        <div className='left w-full h-full flex flex-col justify-center items-center py-4 md:py-0'><img src={i} alt="" className='w-10 hover:scale-[1.3] transition'/>Expert Help, When You Need It</div>
        <div className='mid w-full h-full flex flex-col justify-center items-center py-4 md:py-0'><img src={m} alt="" className='w-10 hover:scale-[1.3] transition'/>7 Days Easy Return& Exchange</div>
        <div className='right w-full h-full flex flex-col justify-center items-center py-4 md:py-0'><img src={g} alt="" className='w-10 hover:scale-[1.3] transition'/>Shipping within 24 Hours</div>
      </div>
      <div className='h-auto md:h-[35vh] bg-gray-200 py-5 flex flex-col'>
        <h1 className='text-center text-3xl md:text-5xl'>You Flaunt It, We Back It!</h1>
        <div className='flex flex-wrap gap-6 md:gap-10 justify-center items-center'>
          <img src={c1} alt="" className='w-[10vh] h-[10vh] md:w-[20vh] md:h-[20vh] my-4 md:my-7 rounded-full'/>
          <img src={c2} alt="" className='w-[10vh] h-[10vh] md:w-[20vh] md:h-[20vh] my-4 md:my-7 rounded-full hover:scale-[1.1] transition'/>
          <img src={c3} alt="" className='w-[10vh] h-[10vh] md:w-[20vh] md:h-[20vh] my-4 md:my-7 rounded-full hover:scale-[1.1] transition'/>
          <img src={c4} alt="" className='w-[10vh] h-[10vh] md:w-[20vh] md:h-[20vh] my-4 md:my-7 rounded-full hover:scale-[1.1] transition'/>
          <img src={c5} alt="" className='w-[10vh] h-[10vh] md:w-[20vh] md:h-[20vh] my-4 md:my-7 rounded-full hover:scale-[1.1] transition'/>
          <img src={c6} alt="" className='w-[10vh] h-[10vh] md:w-[20vh] md:h-[20vh] my-4 md:my-7 rounded-full hover:scale-[1.1] transition'/>
          <img src={c7} alt="" className='w-[10vh] h-[10vh] md:w-[20vh] md:h-[20vh] my-4 md:my-7 rounded-full hover:scale-[1.1] transition'/>
          <img src={c8} alt="" className='w-[10vh] h-[10vh] md:w-[20vh] md:h-[20vh] my-4 md:my-7 rounded-full hover:scale-[1.1] transition'/>
        </div>
      </div>
    </>
  ) : (
    <div className="text-center mt-[20vh] text-red-500 text-xl">
      Product not found. Did Whis erase it from existence? 🕊️
    </div>
  );
};

export default ProductDetails;
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
import p6 from '../assets/images/p6.png';
import p7 from '../assets/images/p7.png';
import p8 from '../assets/images/p8.jpg';
import p9 from '../assets/images/p9.jpg';
import p10 from '../assets/images/p10.jpg';
import p11 from '../assets/images/p11.jpg';
import p12 from '../assets/images/p12.jpg';

const homeProducts = [
  {
      id: 'h001',
      name: 'Bold Vibe T-Shirt',
      image: p1,
      gallery: [p1, p1, p1, p1],
      price: '₹1,599.00',
      priceValue: 1599,
      category: 'T Shirt',
      tags: ['Bold', 'Summer', 'Cotton', 'Street Wear'],
      description: 'Unapologetically bold, this tee brings loud energy in soft cotton form for sunlit scenes and standout fits. The vibrant print and breathable fabric make it perfect for summer adventures, street style, and everyday comfort.',
      rating: 4.4,
      review: 'Print pops and fabric’s breezy. Go-to for summer days.',
      material: 'Cotton Blend',
      fit: 'Regular Fit',
      delivery: 'Delivery: 2–4 business days'
    },
    {
      id: 'h002',
      name: "Warrior's T Shirt",
      image: p2,
      gallery: [p2, p2, p2, p2],
      price: '₹1,699.00',
      priceValue: 1699,
      category: 'T Shirt',
      tags: ['Premium', 'Cotton', 'Casual', 'Trending'],
      description: 'Lux-grade cotton and everyday styling — this tee nails the balance between comfort and polish. Its premium feel and versatile design make it ideal for both casual outings and elevated looks.',
      rating: 4.6,
      review: 'Feels rich. Perfect for daily looks with minimal effort.',
      material: 'Premium Cotton',
      fit: 'Slim Fit',
      delivery: 'Delivery: 3–5 business days'
    },
    {
      id: 'h003',
      name: 'Urban Joggers',
      image: p3,
      gallery: [p3, p3, p3, p3],
      price: '₹1,999.00',
      priceValue: 1999,
      category: 'Jogger',
      tags: ['Street Wear', 'Athletic', 'Bold', 'Relaxed'],
      description: 'These joggers blend urban grit and soft stride — tapered fit, utility style, and off-duty cool. Designed for movement and comfort, they’re perfect for workouts, travel, or laidback weekends.',
      rating: 4.3,
      review: 'Laidback performance. Looks clean with sneakers.',
      material: 'Blended Fleece',
      fit: 'Tapered Fit',
      delivery: 'Delivery: 3–6 business days'
    },
    {
      id: 'h004',
      name: 'Oversize Impact T Shirt',
      image: p4,
      gallery: [p4, p4, p4, p4],
      price: '₹1,899.00',
      priceValue: 1899,
      category: 'T Shirt',
      tags: ['Oversize', 'Bold', 'Trending', 'Cotton'],
      description: 'Max out comfort with this oversized drop. Heavy cotton, elevated fit, and standout street style. The oversized silhouette offers a modern look and all-day comfort for any occasion.',
      rating: 4.7,
      review: 'Drape’s solid and build feels premium.',
      material: 'Heavy Cotton',
      fit: 'Oversized Fit',
      delivery: 'Delivery: 2–5 business days'
    },
    {
      id: 'h005',
      name: 'Desert Charge Cargo Pant',
      image: p5,
      gallery: [p5, p5, p5, p5],
      price: '₹1,799.00',
      priceValue: 1799,
      category: 'Cargo',
      tags: ['Cargo', 'Casual', 'Bold', 'Street Wear'],
      description: 'Warm-toned cargos with function-first design. Pockets, flow, and edge — built for high utility and fit. These pants are perfect for outdoor adventures, travel, or urban exploration.',
      rating: 4.5,
      review: 'Rock-solid build. Utility meets comfort.',
      material: 'Twill Blend',
      fit: 'Loose Fit',
      delivery: 'Delivery: 4–6 business days'
    },
    {
      id: 'h006',
      name: 'Sharp Collar Shirt',
      image: p6,
      gallery: [p6, p6, p6, p6],
      price: '₹1,699.00',
      priceValue: 1699,
      category: 'Shirt',
      tags: ['Cotton', 'Premium', 'Casual', 'Tailored'],
      description: 'Minimalist lines with premium fabric. A shirt that plays formal when needed and clean when styled solo. Its soft cotton and slim fit make it a versatile staple for any wardrobe.',
      rating: 4.2,
      review: 'Feels refined and holds structure.',
      material: 'Soft Cotton',
      fit: 'Slim Fit',
      delivery: 'Delivery: 2–4 business days'
    },
    {
      id: 'h007',
      name: 'Peach Drift T Shirt',
      image: p7,
      gallery: [p7, p7, p7, p7],
      price: '₹1,599.00',
      priceValue: 1599,
      category: 'T Shirt',
      tags: ['Relaxed', 'Summer', 'Cotton', 'Trending'],
      description: 'Washed peach tone with a relaxed vibe. Perfect for mellow moods, weekend layering, and warm weather scenes. The relaxed fit and soft cotton make it a summer essential.',
      rating: 4.6,
      review: 'Color’s soothing. A chill classic.',
      material: 'Peach-Washed Cotton',
      fit: 'Relaxed Fit',
      delivery: 'Delivery: 3–5 business days'
    },
    {
      id: 'h008',
      name: 'GymFlow Shorts',
      image: p8,
      gallery: [p8, p8, p8, p8],
      price: '₹1,699.00',
      priceValue: 1699,
      category: 'Shorts',
      tags: ['Athletic', 'Cotton', 'Casual', 'Summer'],
      description: 'Built to move. Mesh cotton blend gives flexibility and breathability for training, lounging, or layering. These shorts are ideal for gym sessions, running, or relaxed weekends.',
      rating: 4.5,
      review: 'Active fit with streetwear appeal.',
      material: 'Microfiber Mesh',
      fit: 'Athletic Fit',
      delivery: 'Delivery: 2–4 business days'
    },
    {
      id: 'h009',
      name: 'Breeze Tank T Shirt',
      image: p9,
      gallery: [p9, p9, p9, p9],
      price: '₹1,599.00',
      priceValue: 1599,
      category: 'T Shirt',
      tags: ['Sleeveless', 'Cotton', 'Athletic', 'Bold'],
      description: 'Designed for airflow and max mobility — this sleeveless tee pairs with joggers, cargos, or shorts effortlessly. Lightweight and breathable, it’s perfect for workouts or hot days.',
      rating: 4.0,
      review: 'Perfect layer for gym or solo wear.',
      material: 'Light Cotton',
      fit: 'Regular Fit',
      delivery: 'Delivery: 3–5 business days'
    },
    {
      id: 'h010',
      name: 'Polo Flex Collar T Shirt',
      image: p10,
      gallery: [p10, p10, p10, p10],
      price: '₹1,799.00',
      priceValue: 1799,
      category: 'Polo',
      tags: ['Polo', 'Cotton', 'Premium', 'Casual'],
      description: 'Crisp collar meets breathable pique — a smart casual staple, upgraded for movement and texture. The tailored fit and premium fabric make it a go-to for both work and play.',
      rating: 4.6,
      review: 'Feels smooth and holds its fit.',
      material: 'Cotton Pique',
      fit: 'Tailored Fit',
      delivery: 'Delivery: 2–4 business days'
    },
    {
      id: 'h011',
      name: 'Core Blue T Shirt Plane',
      image: p11,
      gallery: [p11, p11, p11, p11],
      price: '₹1,599.00',
      priceValue: 1599,
      category: 'T-Shirt',
      tags: ['Cotton', 'Casual', 'Bold', 'Essential'],
      description: 'No distractions. No branding. Just pure cotton and minimalist cool — built for everyday layering. The regular fit and basic cotton make it a versatile essential.',
      rating: 4.3,
      review: 'Washes well. Clean and chill.',
      material: 'Basic Cotton',
      fit: 'Regular Fit',
      delivery: 'Delivery: 3–6 business days'
    },
    {
      id: 'h012',
      name: 'Thermo White Jacket - ',
      image: p12,
      gallery: [p12, p12, p12, p12],
      price: '₹1,899.00',
      priceValue: 1899,
      category: 'Jacket',
      tags: ['Winter', 'Warm', 'Bold', 'Cotton'],
      description: 'Heat-ready outer layer for crisp weather battles. Cozy feel with a structured streetwear edge. The insulated fit and thermal polyester make it ideal for cold days.',
      rating: 4.8,
      review: 'Feels like a blanket with form.',
      material: 'Thermal Polyester',
      fit: 'Insulated Fit',
      delivery: 'Delivery: 4–7 business days'
    }
];

export default homeProducts;
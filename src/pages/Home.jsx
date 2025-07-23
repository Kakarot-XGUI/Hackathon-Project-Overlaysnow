import { Carousel } from 'react-responsive-carousel';
import InfiniteCarousel from '../components/InfiniteCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ScrollVelocity from "../components/ScrollVelocity";
import ProductCard from '../components/ProductCard';
import homeProducts from '../data/homeProducts';
import mimg1 from '../assets/images/mimg1.png'; 
import mimg2 from '../assets/images/ming2.png';
import mimg3 from '../assets/images/mimg1m.webp';
import mimg4 from '../assets/images/mimg2m.webp';
import mimg5 from '../assets/images/aboutend.jpg';
import mimg6 from '../assets/images/aboutend2.jpg';
import mimg7 from '../assets/images/aboutend3.jpg';
import mimg8 from '../assets/images/aboutend4.jpg';
import mimg9 from '../assets/images/Vogue.avif';
import mimg10 from '../assets/images/logo.08.avif';
import mimg11 from '../assets/images/homeend.jpg';
import mimg12 from '../assets/images/homeend1.jpg';
import mimg13 from '../assets/images/homeend2.jpg';
import mimg14 from '../assets/images/homeend3.jpg';


const Home = () => {
  return (
    <>
    
   <section className="md:hidden w-screen h-full bg-black flex items-center justify-center mt-8">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        swipeable={true}
        emulateTouch={true}
      >
        <div>
          <img  src={mimg4} alt="Image 1" className="object-cover h-full w-screen" />
        </div>
        <div>
          <img  src={mimg3} alt="Image 2" className="object-cover h-full w-screen" />
        </div>
      </Carousel>
    </section>
    <section className="hidden md:block w-screen h-full bg-black flex items-center justify-center">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        swipeable={true}
        emulateTouch={true}
      >
        <div>
          <img  src={mimg2} alt="Image 1" className="object-cover h-[100vh] w-screen" />
        </div>
        <div>
          <img  src={mimg1} alt="Image 2" className="object-cover h-[100vh] w-screen" />
        </div>
      </Carousel>
    </section>


<div className='py-2 bg-black'>
<ScrollVelocity
  texts={['Prepaid order Ships within 24 Hours 🚚', ' 7 days Easy Exchange and Returns | Loved by +1 lakh customers🔥']} 
  velocity={100} 
  className="custom-scroll-text text-6xl bg-transparent font-black text-gray-500 Font2 capitalize"
/> </div>

  <div className='w-screen pb-2 pt-8 bg-white flex justify-center items-center text-black text-center Font1'>
    <h1 className='text-5xl tracking-widest'>Trending Category</h1>
      </div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
  {homeProducts.map(({ price, ...product }, index) => (
    <ProductCard
      key={product.id}
      product={product}
      context="home"
      index={index}
    />
  ))}
</div>




  
   

   <div className='w-screen h-auto mt-10'>
      <img src={mimg13} alt="" className='md:hidden' />
      <img src={mimg14} alt="" className='hidden md:block' />
    </div>
   

   <div className="mt-10">
    <InfiniteCarousel />
  </div>



    <div className='w-screen h-auto'>
      <img src={mimg11} alt="" className='md:hidden' />
      <img src={mimg12} alt="" className='hidden md:block' />
    </div>


   <div className='flex flex-col justify-center items-center'>
    <h1 className='font-bold text-sm md:text-lg my-6'>PRESS RELEASE & MORE</h1>
    <div className='flex gap-20 my-6 justify-center items-center'>
    <img src={mimg9} alt=""  className="w-[25%] h-[9%] md:w-[13%] md:h-[3%]" />
    <img src={mimg10} alt="" className="w-[25%] h-[9%] md:w-[13%] md:h-[3%]"  /></div>
   </div>

   <section className="md:hidden w-screen h-full bg-black flex items-center justify-center mt-8">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        swipeable={true}
        emulateTouch={true}
      >
        <div>
          <img  src={mimg7} alt="Image 1" className="object-cover h-full w-screen" />
        </div>
        <div>
          <img  src={mimg8} alt="Image 2" className="object-cover h-full w-screen" />
        </div>
      </Carousel>
    </section>
    <section className="hidden md:block w-screen h-full bg-black flex items-center justify-center">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        swipeable={true}
        emulateTouch={true}
      >
        <div>
          <img  src={mimg5} alt="Image 1" className="object-cover h-[100vh] w-screen" />
        </div>
        <div>
          <img  src={mimg6} alt="Image 2" className="object-cover h-[100vh] w-screen" />
        </div>
      </Carousel>
    </section>


  




    </>
  );
};

export default Home;
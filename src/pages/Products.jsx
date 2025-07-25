// Main Product Page Contain ProductSection.jsx + Other Stuffs

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import mimg1 from '../assets/images/mtshirt.jpg'; 
import mimg2 from '../assets/images/mtshirt1.jpg';
import mimg3 from '../assets/images/mtshirt2.jpg';
import mimg4 from '../assets/images/mtshirt3.png';
import ProductSection from '../components/ProductSection';


const Products = () => {
  
  return ( <>
   
   <div className='mt-[15vh] w-screen h-full'> <ProductSection />
  
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
              <img  src={mimg1} alt="Image 1" className="object-cover h-full w-screen" />
            </div>
            <div>
              <img  src={mimg4} alt="Image 4" className="object-cover h-full w-screen" />
            </div>
          </Carousel>
        </section>
        <section className="hidden md:block w-screen h-full bg-black flex items-center justify-center mt-14">
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
              <img  src={mimg2} alt="Image 2" className="object-cover h-[100vh] w-screen" />
            </div>
            <div>
              <img  src={mimg3} alt="Image 3" className="object-cover h-[100vh] w-screen" />
            </div>
          </Carousel>
        </section>
  </>) 
}

export default Products

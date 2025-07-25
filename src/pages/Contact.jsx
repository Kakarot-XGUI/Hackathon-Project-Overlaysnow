// Contact us Page 

import Particles from "../components/Particles";
import mr from "../assets/images/Review.png"
import r from "../assets/images/reviewc.png"
const contact = () => {
  return (
    <>
    <div className="w-full h-[200%] absolute -z-1 bg-black">
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={800}
    particleSpread={20}
    speed={0.6}
    particleBaseSize={120}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
  

    <div className="bg-transparent text-white mt-20 py-20 px-12 lg:px-20">
  {/* Heading */}
  <h1 className="text-center text-4xl sm:text-5xl font-bold text-orange-500 uppercase border-orange-500 pb-4 mb-12 gap-4 flex flex-col">
    <span className="">Contact Us</span>
    <hr className="w-[65vw] mx-auto"/>
  </h1>

  {/* Contact Info Section */}
  <div className="max-w-3xl mx-auto space-y-6 text-center text-lg leading-relaxed">
    <p>
      We’re here to help! Customer support is available from{" "}
      <span className="text-orange-400 font-semibold">10:00 AM to 6:00 PM</span> (IST), Monday to Saturday.
    </p>
    <p>
      Got a query? Drop us a line at{" "}
      <span className="text-orange-400 font-semibold">support@overlaysclothing.com</span>
    </p>
    <p>
      Or simply ping us on{" "}
      <span className="text-orange-400 font-semibold">WhatsApp</span> at the bottom right corner of the website.
    </p>
    <p className="text-orange-300 font-medium">We'll get back to you as soon as possible!</p>
  </div>

  {/* Divider */}
  <div className="w-full max-w-3xl mx-auto mt-16 border-t border-orange-500 pt-10 text-center text-sm">
    <h2 className="text-xl font-semibold uppercase text-orange-500 mb-3">
      Manufactured by:
    </h2>
    <p className="text-base text-gray-300 leading-relaxed">
      Overlays Clothing Pvt Ltd <br />
      16TH FLOOR, UNIT NUMBER 1617, PLOT NO. 58, LOGIX CITY CENTRE, BLOCK- BW, SECTOR 32, NOIDA<br />
      Gautam Buddha Nagar, Uttar Pradesh, 201301
    </p>
  </div>
</div>

<div className='w-screen h-auto mt-10'>
      <img src={mr} alt="" className='md:hidden' />
      <img src={r} alt="" className='hidden md:block' />
    </div>
    </>
  );
};

export default contact;
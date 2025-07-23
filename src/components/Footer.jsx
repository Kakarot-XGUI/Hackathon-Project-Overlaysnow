import 'remixicon/fonts/remixicon.css'
const Footer = () => {
  
  return (
    <footer className="bg-[#f5f5f5] w-screen h-full text-[#111] px-6 py-8 md:px-20 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        {/* ABOUT US */}
        <div >
          <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
          <p className="mb-1">Overlays Ent Private Limited</p>
          <p className="mb-2">Chase Your Freedom.</p>
          <a href="#" className="text-sm text-black underline">Learn More</a>
        </div>

        {/* POLICIES */}
        <div > 
          <h3 className="text-lg font-semibold mb-4">POLICIES</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Return Your Order</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return, Refund, and Cancellation</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-2">
            You can be the first one to know about our new releases, latest offers and more. <a href="#" className="text-black underline">Sign up now!</a>
          </p>
          <form className="flex mt-4">
            <input
              type="email"
              placeholder="Your E-mail"
              className="flex-grow px-3 py-2 border border-gray-300  bg-white focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r"
            >
              →
            </button>
          </form>
        </div>

        {/* FOLLOW US */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
          <p className="text-sm mb-2">Stay in touch!</p>
         <div className="flex gap-4 text-2xl">
  <a
    href="https://www.facebook.com/TechBurner"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:scale-110 transition-transform duration-200"
  >
    <i className="ri-facebook-fill"></i>
  </a>

  <a
    href="https://www.instagram.com/techburner"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 hover:scale-110 transition-transform duration-200"
  >
    <i className="ri-instagram-line"></i>
  </a>

  <a
    href="https://www.youtube.com/@TechBurner"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-600 hover:scale-110 transition-transform duration-200"
  >
    <i className="ri-youtube-fill"></i>
  </a>

  <a
    href="https://twitter.com/shlokgautam"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-900 hover:scale-110 transition-transform duration-200"
  >
    <i className="ri-twitter-x-fill"></i>
  </a>

  <a
    href="https://www.linkedin.com/in/shlokgautam"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:scale-110 transition-transform duration-200"
  >
    <i className="ri-linkedin-box-fill"></i>
  </a>
</div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-left text-sm text-gray-600 border-t pt-4">
        <p>Overlays &nbsp; • &nbsp; Designed By Ishit Singh [Kakarot-XGUI]</p>
      </div>
    </footer>
  );
};

export default Footer;
import { NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
  FaFire,
  FaTruck,
} from "react-icons/fa";
import navimage from "../assets/images/navicon.png";
import { useState, useEffect, useRef } from "react";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

const UserBadge = () => {
  const { user } = useUser();
  if (!user) return null;

  return (
    <div className="flex items-center gap-2">
      <img
        src={user.imageUrl}
        alt="User avatar"
        className="w-8 h-8 rounded-full"
      />
      <span className="text-sm font-medium">
        {user.fullName || user.username}
      </span>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFirst, setShowFirst] = useState(true);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (currentY > lastScrollY.current && currentY > 40) {
            setNavVisible(false); // scroll down, hide nav
          } else {
            setNavVisible(true); // scroll up, show nav
          }
          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className={`fixed top-0 w-full z-[999] transition-transform duration-500 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full h-[6vh] bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-white flex items-center justify-center relative font-semibold text-sm tracking-wide overflow-hidden">
          <div
            className={`absolute flex items-center gap-2 transition-all duration-700 ${
              showFirst ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <FaFire /> +1,00,000 Happy Customers
          </div>
          <div
            className={`absolute flex items-center gap-2 transition-all duration-700 ${
              showFirst ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <FaTruck /> Prepaid Orders dispatch within 24 hours
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="z-[999] w-full h-20 bg-black text-white px-4 sm:px-6 font-medium flex items-center justify-between relative">
          {/* Left Section: Hamburger & Desktop NavLinks */}
          <div className="flex items-center gap-4">
            {!isOpen && (
              <button
                aria-label="Open Menu"
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-full transition-all duration-300 ease-in-out text-white z-[1002] relative md:hidden"
              >
                <FaBars size={22} />
              </button>
            )}
            {/* Desktop NavLinks */}
            <div className="hidden md:flex gap-6 text-sm">
              {["/", "/products", "/about", "/contact"].map((path, i) => {
                const names = ["Home", "Products", "About Us", "Contact"];
                return (
                  <NavLink
                    key={i}
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-400 transition-colors duration-300"
                        : "text-white hover:text-orange-400 transition-colors duration-300"
                    }
                  >
                    {names[i]}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={navimage} alt="Overlay Logo" className="w-16 md:w-20 h-auto" />
          </div>

          {/* Right: Search, Cart, Auth */}
          <div className="flex items-center gap-4 z-[1001]">
            <FaSearch className="hidden md:block cursor-pointer" />
            <FaShoppingCart className="hidden md:block cursor-pointer" />
            <SignedIn>
              <UserBadge />
            </SignedIn>
            <SignedOut>
              <div className="hidden md:flex gap-1 text-sm">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 transition-colors duration-300"
                      : "text-white hover:text-orange-400 transition-colors duration-300"
                  }
                >
                  Login
                </NavLink>
                <span className="mx-1">/</span>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 transition-colors duration-300"
                      : "text-white hover:text-orange-400 transition-colors duration-300"
                  }
                >
                  Sign up
                </NavLink>
              </div>
              <div className="md:hidden text-sm">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 transition-colors duration-300"
                      : "text-white hover:text-orange-400 transition-colors duration-300"
                  }
                >
                  Sign up
                </NavLink>
              </div>
            </SignedOut>
          </div>
        </nav>

        {/* Background Overlay for Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-[998] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Slide-Out Mobile Menu */}
        <div
          className={`fixed top-[6vh] left-0 h-screen w-[70%] bg-white px-6 pt-6 pb-4 z-[1000] flex flex-col text-sm md:hidden transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button inside Menu */}
          <div className="flex justify-end">
            <button
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
              className="text-black p-2"
            >
              <FaTimes size={22} />
            </button>
          </div>

          {/* NavLinks */}
          <div className="flex flex-col gap-4 mt-4">
            {["Home", "Products", "About Us", "Contact"].map((label, index) => {
              const routes = ["/", "/products", "/about", "/contact"];
              return (
                <NavLink
                  key={index}
                  to={routes[index]}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 transition-colors duration-300"
                      : "text-black hover:text-orange-500 transition-colors duration-300"
                  }
                >
                  {label}
                </NavLink>
              );
            })}
          </div>

          {/* Auth Links */}
          <SignedIn>
            <div className="mt-6">
              <UserBadge />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex gap-2 mt-4">
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 transition-colors duration-300"
                    : "text-black hover:text-orange-500 transition-colors duration-300"
                }
              >
                Login
              </NavLink>
              <span className="mx-1">/</span>
              <NavLink
                to="/signup"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 transition-colors duration-300"
                    : "text-black hover:text-orange-500 transition-colors duration-300"
                }
              >
                Sign up
              </NavLink>
            </div>
          </SignedOut>
        </div>
      </div>
    </>
  );
};

export default Nav;

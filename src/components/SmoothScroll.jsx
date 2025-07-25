// Lenis Implemented

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,            
      duration: 1.2,       
      smoothTouch: true,  
      wheelMultiplier: 1.2, 
      touchMultiplier: 2,  

    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return null; 
};

export default SmoothScroll;
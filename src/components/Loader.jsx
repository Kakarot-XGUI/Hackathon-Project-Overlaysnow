import React, { useEffect, useState } from "react";
import img1 from "../assets/images/mimg1.png"
import TextType from "../components/TextType"
import navicon from "../assets/images/navicon.png"
import ScrollVelocity from "./ScrollVelocity";
const Loader = ({ onFinish }) => {
  const [count, setCount] = useState(0);
  const [showLine, setShowLine] = useState(false);
  const [animateLine, setAnimateLine] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
  const [readyToClick, setReadyToClick] = useState(false);
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    let interval;
    if (count < 99) {
      interval = setInterval(() => {
        setCount((c) => c + 1);
      }, 30);
    } else {
      clearInterval(interval);

      // sequence of reveals
      setTimeout(() => setShowLine(true), 300);
      setTimeout(() => setAnimateLine(true), 500);
      setTimeout(() => setShowLanding(true), 1600);
      setTimeout(() => setReadyToClick(true), 2000);
    }
    return () => clearInterval(interval);
  }, [count]);

  const handleLandingClick = () => {
    if (!readyToClick) return;
    // kick off full-screen slide-up
    setAnimateExit(true);
    // only call onFinish after the slide completes
    setTimeout(onFinish, 800);
  };

  return (
    <div
      className={`
        fixed inset-0 z-50 overflow-hidden
        transform transition-transform duration-700 ease-in-out
        ${animateExit ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* black backdrop */}
      <div className="absolute inset-0 bg-black" />

      {/* counter + spinner */}
      {!showLanding && (
        <>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold z-10">
            {count < 99 ? count : "99"}
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        </>
      )}

      {/* white overlay growing down */}
      {showLine && (
        <div
          className="absolute inset-0 bg-white flex items-center justify-center overflow-hidden z-20"
          style={{
            height: animateLine ? "100%" : "0%",
            transition: "height 1.2s ease-out",
          }}
          onClick={handleLandingClick}
        >
          {/* landing content */}
          {showLanding && (
            <div className="text-center px-6 flex justify-center items-center">
             <div className="bg-black absolute w-[97%] h-[95%] text-white">
              <h1 className="text-sm w-full md:text-4xl uppercase bottom-0 absolute left-1/2  -translate-x-[50%] animate-pulse">Click Any Where to Move to The Website</h1>
              <ScrollVelocity
                texts={['OverLay Your Premium Clothing Brand ✨ By Shlok Srivastava [Tech Burner]', ' Winter Wear , Summer Wear, Gen-z Stuff, Be Bold,  Be Positive 🐦‍🔥']} 
                velocity={100} 
                className="custom-scroll-text bg-transparent text-white text-2xl md:text-4xl uppercase animate-pulse"
              />
              <div className="rounded-full w-[10vh] h-[10vh] md:w-[20vh] md:h-[20vh] bottom-10 left-10 md:left-20 border-4 border-white animate-pulse absolute">
                <img src={navicon} alt="" className="aniimate-pulse"/>
              </div>
          

        <TextType
  text={[
    "Presenting You",
    "The OverLay",
    "`Born here. Styled to slay. those Gucci boys.`"
  ]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="_"
  className="absolute top-1/2 left-20 -translate-y-[50%] w-[50%]"
/>

             </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Loader;
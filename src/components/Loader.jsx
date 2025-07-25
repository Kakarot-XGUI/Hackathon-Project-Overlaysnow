import { useEffect, useState } from "react";
import img1 from "../assets/images/Loader.png"
import img2 from "../assets/images/Loaderd.png"
import TextType from "../components/TextType"  // React bit component hai yei
import navicon from "../assets/images/navicon.png"
import ScrollVelocity from "./ScrollVelocity";  // React bit component hai yei
import CircularText from "../components/CircularText";  // again react bit

const overlayTranslations = [
  'Overlay', // English
  'ओवरले', // Hindi
  'ओवरले', // Hinglish
  'ओव्हरले', // Marathi
  'ਓਵਰਲੇ', // Punjabi
  'ஓவர்லே', // Tamil
  'ఓవర్లే', // Telugu
  'ಓವರ್‌ಲೇ', // Kannada
  'ഓവർലെ', // Malayalam
  'ওভারলে', // Bengali
  'ઓવરલે', // Gujarati
  'अधिस्तरण', // Sanskrit
];


const Loader = ({ onFinish }) => {
  const [showLine, setShowLine] = useState(false);
  const [animateLine, setAnimateLine] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
  const [readyToClick, setReadyToClick] = useState(false);
  const [animateExit, setAnimateExit] = useState(false);
  const [langIndex, setLangIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let langInterval;
    let landingTimeout;
    langInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setLangIndex((i) => (i + 1) % overlayTranslations.length);
        setFade(true);
      }, 150);
    }, 300);
    landingTimeout = setTimeout(() => {
      clearInterval(langInterval);
      setShowLine(true);
      setTimeout(() => setAnimateLine(true), 180);
      setTimeout(() => setShowLanding(true), 1100);
      setTimeout(() => setReadyToClick(true), 1500);
    }, 8000);
    return () => {
      clearInterval(langInterval);
      clearTimeout(landingTimeout);
    };
  }, []);

  const handleLandingClick = () => {
    if (!readyToClick) return;
    
    setAnimateExit(true);
    // only call onFinish 
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

      {/* Overlay translation in center + spinner at bottom --> inspired by the yt short just scrolling , and meko accha laga so i implemented */}
      {!showLanding && (
        <>
          <div className="absolute text-orange-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span
              className={`text-5xl md:text-7xl font-extrabold transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}
              style={{ letterSpacing: '0.05em', textShadow: '0 2px 16px rgba(0,0,0,0.25)' }}
            >
              {overlayTranslations[langIndex]}
            </span>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        </>
      )}

      {/* white overlay goes down */}
      {showLine && (
        <div
          className="absolute inset-0 bg-white flex items-center justify-center overflow-hidden z-20"
          style={{
            height: animateLine ? "100%" : "0%",
            transition: "height 1.2s ease-out",
          }}
          onClick={handleLandingClick}
        >
          {/* landing content  simple*/}
          {showLanding && (
            <div className="text-center px-6 flex justify-center items-center">
             <div className="bg-black absolute w-[97%] h-[95%] text-white">
              <h1 className="text-sm w-full md:text-4xl uppercase bottom-0 absolute left-1/2  -translate-x-[50%] animate-pulse">Click Any Where to Move to The Website</h1>
              <ScrollVelocity
                texts={['OverLay Your Premium Clothing Brand ✨ By Shlok Srivastava [Tech Burner]', ' Winter Wear , Summer Wear, Gen-z Stuff, Be Bold,  Be Positive 🐦‍🔥']}
                velocity={100}
                className="custom-scroll-text bg-transparent text-white text-2xl md:text-4xl uppercase animate-pulse"
              />

              {/* React bit component TextType */}
              <TextType
                text={[
                  "Presenting You",
                  "The OverLay",
                  "` Born here. Styled to slay. those Gucci boys. `"
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
className="absolute mt-[16vh] mb-[20vh] w-full 
            text-center lg:text-left 
            left-0 lg:left-20 
            -translate-y-[50%] 
            z-50"        />

              {/* Logo and CircularText ring container  */}
              <div className="fixed bottom-16 left-10 md:left-14 lg:left-[20vh] md:bottom-[20vh] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] z-30 flex items-center justify-center">
               
                <CircularText
                  text=" 🔥 OVERLAY 🔥 CLOTHING"
                  onHover="speedUp"
                  spinDuration={20}
                  className="w-20 h-20 absolute top-0 left-0"
                />
               
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] border-1 lg:border-4 border-white animate-pulse flex items-center justify-center z-40 bg-black">
                  <img src={navicon} alt="" className="aniimate-pulse w-2/3 h-2/3 object-contain"/>
                </div>
              </div>

              <img src={img1} alt="" className="absolute right-0 md:right-5 bottom-10 md:bottom-15 lg:bottom-10 h-[40%] sm:h-[60%] md:h-[55%] lg:h-[60%]"/>
              <img src={img2} alt=""
                className="absolute h-[25%] md:h-[32%] bottom-[32vh] sm:bottom-[25vh] md:bottom-[15vh] sm:h-[30%]
                md:right-1/3 sm:right-1/2 right-1/6 lg:h-[40%] lg:right-1/5 lg:bottom-[20vh]"/>

             </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Loader;
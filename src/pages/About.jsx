import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Threads from "../components/Threads";
import img2021 from "../assets/images/img1.png";
import img2022 from "../assets/images/img2.jpg";
import img2023 from "../assets/images/img3.jpg";
import img2024 from "../assets/images/img4.jpg";
import img2025 from "../assets/images/img5.jpg";


// === Timeline Data ===
const timelineData = [
  {
    year: "2021 : The Launch Year",
    image: img2021,
    reverse: false,
    description: `Overlay Clothing was officially Launched in November 2021 by Shlok Srivastava(Teach Burner), The Brand Foucsed on Graphic Streetwear with Bold, Expressive Designs Aimed at Gen-z & millenial audiences, Shlok shared his journey in  Youtube video's , Highlighting the brand's mission to empower People who Live Life with a Positive Attitude.
     Initially traction was strong, Thanks to TechBurner;s massive Youtube following and Social Media Presence`,
  },
  {
    year: "2022 : Scaling & Diversification",
    image: img2022,
    reverse: true,
    description: `Overlays expanded its product line with winter collections and more diverse apparel options. Shlok also co-founded Layers, a mobile and laptop skin  brand, in collaboration with Neel Gogia, Overlay's branding Leaned into community-driven creativity, with Designs reflecting individuality and optimism. Shlok was Featured in Forbes 30 Under 30 for his impact on the fashion industry & Entrepreneurial impact.`,
  },
  {
    year: "2023 : Studio Expansion & Brand Consolidation",
    image: img2023,
    reverse: false,
    description: `Tech Burner's team moved into a new studio space, allowing for more creative freedom and production capacity. The brand streamlined its offerings under the OverlaysNow umbrella, focusing on high-quality, limited-edition drops. Collaborations with other creators and influencers helped solidify Overlays as a leading Gen-Z fashion brand. Overlay continued to grow, with new drops and collaborations, including a successful partnership across Social Media. Shlok's influence helped drive traffic and sales, with his 10 million subscribers on January`,
  },
  {
    year: "2024 : Immersive Branding & Product Innovation",
    image: img2024,
    reverse: true,
    description: `Overlay Launched a secret room experience, in Banglore to Showcase its new collection in a creative escape-room format. The Brand emphasized storytelling and immersive Design, Blending fashion with Tech-inspired Themes and experiences. OverlaysNow also introduced AR try-ons and interactive online shopping features, enhancing the digital-first experience for customers.`,
  },
  {
    year: "2025 : Continued Growth & Community Engagement",
    image: img2025,
    reverse: false,
    description: `Overlay remains a key part of Tech Burner's entrepreneurial portfolio, Alongside Layers and Burner Digital. THe Brand COntinues to release Limited-edition drops, Collaborate with other creators, and engage its community through social media and events. Shlok's vision of empowering individuals through fashion and technology continues to drive OverlaysNow's growth and innovation.`,
  },
];

//  Timeline Card 
const TimelineCard = ({ year, image, description, reverse }) => {
  const align = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <motion.div
      className={`relative w-full flex flex-col ${align} items-center justify-between mb-32 z-10`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4, once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left or Right Image */}
      <div className="w-full md:w-[40%] items-center flex justify-center">
        <img
          src={image}
          alt={`Overlays ${year}`}
          className="w-[90%] p-5 h-auto rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Empty center space (line is behind) */}
      <div className="hidden md:block w-[6px] h-[180px] bg-transparent" />

      {/* Year and Text */}
      <div className="w-full md:w-[47%] px-6 md:px-0  text-center mt-5">
        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-900 mb-4">{year}</h2>
        <p className="text-gray-700 text-lg leading-relaxed capitalize">{description}</p>
      </div>
    </motion.div>
  );
};

// === Main About Component ===
const About =  () => {
  const containerRef = useRef(null);

  // Track scroll progress within the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  // Dynamically measure container height
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      setLineHeight(height - 100); // slight padding to prevent overflow
    }
  }, []);

  // Map scroll progress to glowing dot movement
  const y = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <>
     

      {/* Hero / About Section */}
      <section className="w-full min-h-screen mt-10 bg-black flex items-center justify-center px-6 py-20 text-center relative">
      <div className="w-full h-[600px] absolute -top-1">
       <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
      />
    </div>

        <div className="max-w-[900px]">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-500 mb-20 leading-tight">
            About Overlays Now
          </h1>
          <p className="text-lg sm:text-xl text-white leading-relaxed font-medium tracking-wide">
            Overlays is a creator-led fashion-tech brand founded by{" "}
            <span className="font-semibold text-indigo-700">TechBurner</span> in{" "}
            <span className="font-semibold text-indigo-700">2021</span>.
            <br />
            Blending innovative design, digital-first experiences, and
            hype-worthy drops, it became a Gen-Z fashion movement.
            <br />
            With premium UI storytelling, AR try-ons, and strong creator energy,{" "}
            <span className="font-semibold text-indigo-700">OverlaysNow</span>{" "}
            isn’t just clothing—it’s the evolution of smart, expressive fashion.
          </p>
        </div>
      </section>

     <div className="text-4xl lg:text-5xl flex justify-center items-center font-bold text-center p-4 tracking-wider text-orange-500">
      <h1>OUR JOURNEY</h1></div>


      {/* Timeline */}
      <section ref={containerRef} className="relative z-10 mt-20 w-full px-6">

        {/*  Center Vertical Line  */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[6px] bg-gradient-to-b from-orange-500 to-orange-600 transform -translate-x-1/2 z-0" />

        {/* === Glowing Circle Following Scroll === */}
        <motion.div
          className="hidden md:block w-5 h-5 rounded-full bg-white ring-4 ring-orange-500 shadow-xl absolute left-1/2 z-10 -translate-x-1/2"
          style={{ y: springY }}
        />

        {/* === Timeline Cards === */}
        <div className="relative z-10">
          {timelineData.map((item, index) => (
            <TimelineCard
              key={index}
              year={item.year}
              image={item.image}
              description={item.description}
              reverse={item.reverse}
            />
          ))} 
        </div>
      </section>

    <section className="w-full md:h-[80vh] bg-black flex items-center justify-center px-4 pt-4">
  <div className="w-[90%] h-full mx-auto">
   <iframe className="w-full h-[40%] md:h-full object-cover" src="https://www.youtube.com/embed/dm7BSM7Y1z4?si=gQACpP8bgHPCiRKJ" title="YouTube video player" ></iframe>
  </div>
</section>   
 
   <section className="w-full py-20 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black relative">
  <div className="max-w-[800px] mx-auto">
    <h2 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-6">This is just the beginning.</h2>
    <p className="text-lg sm:text-xl text-white font-medium leading-relaxed tracking-wide">
      At <span className="font-semibold text-orange-500">OverlaysNow</span>, we don’t just follow trends—we invent tomorrow’s culture.
      <br className="hidden sm:block" />
      Powered by tech, driven by creativity, and built by creators like you, we're shaping a universe where fashion meets function and identity becomes experience.
      <br className="hidden sm:block" />
      Join the movement. Express fearlessly. Overlay your story.
    </p>
    <p className="mt-5 text-lg sm:text-xl text-white font-medium leading-relaxed tracking-wide">Shlok's Journey from tech Youtuber to multi-Brand Founder is now a blueprint for creator-led startups in india</p>
  </div>
</section>


    </>
  );
}

export default About;
import { useEffect, useRef } from "react";

const MagicCursorSVG = ({ rotation }) => (
  <div
    style={{
      transform: `rotate(${rotation}rad)`,
      transformOrigin: "center center",
      transition: "transform 0.05s linear",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={54}
      viewBox="0 0 50 54"
      fill="none"
      style={{ scale: 0.5 }}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="black"
        />
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="white"
          strokeWidth={2.25}
        />
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="100%" height="100%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.08" />
        </filter>
      </defs>
    </svg>
  </div>
);

const SmoothCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const prevPos = useRef({ x: 0, y: 0 });
  const lastAngle = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Movement vector
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;

      // Responsive speed boost
      currentX += dx * 0.2; // faster
      currentY += dy * 0.2;

      // Rotation based on movement
      const angle = Math.atan2(dy, dx);
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        lastAngle.current = angle; // update only while moving
      }

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        cursor.firstChild.style.transform = `rotate(${lastAngle.current}rad)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: "translate3d(0,0,0)",
        pointerEvents: "none",
        zIndex: 999999,
      }}
    >
      <MagicCursorSVG rotation={lastAngle.current} />
    </div>
  );
};

export default SmoothCursor;
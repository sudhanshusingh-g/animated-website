import React, { useState, useEffect } from "react";

export const Game = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleEyeMovement = () => {
      const eyeCenterX = window.innerWidth / 2;
      const eyeCenterY = window.innerHeight / 2;
      const maxEyeMovement = 30; // Maximum movement of the pupil

      const deltaX = mousePosition.x - eyeCenterX;
      const deltaY = mousePosition.y - eyeCenterY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX);

      const clampedDistance = Math.min(distance, maxEyeMovement);

      const x = Math.cos(angle) * clampedDistance;
      const y = Math.sin(angle) * clampedDistance;

      setEyePosition({ x, y });
    };

    handleEyeMovement();
  }, [mousePosition]);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)] bg-center bg-cover"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 flex items-center gap-20">
          {/* First Eye */}
          <div className="bg-zinc-100 rounded-full w-[16vw] h-[16vw] flex items-center justify-center">
            <div className="h-32 w-32 bg-black rounded-full flex items-center justify-center">
              <div
                className="w-1/4 h-1/4 bg-white rounded-full"
                style={{
                  transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                }}
              ></div>
            </div>
          </div>
          {/* Second Eye */}
          <div className="bg-zinc-100 rounded-full w-[16vw] h-[16vw] flex items-center justify-center">
            <div className="h-32 w-32 bg-black rounded-full flex items-center justify-center">
              <div
                className="w-1/4 h-1/4 bg-white rounded-full"
                style={{
                  transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

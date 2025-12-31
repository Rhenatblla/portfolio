"use client";

import SplitText from "./SplitText";
import LightRays from "./LightRays";

export default function Intro({ onEnter }) {
  return (
    <div
      onClick={onEnter}
      className="
        relative w-screen h-screen cursor-pointer overflow-hidden
        flex items-center justify-center
        bg-gradient-to-br
        from-pink-300 via-rose-200 to-white
      "
    >
      {/* Light Rays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysColor="#ec4899" // pink-500
          raysSpeed={0.35}
          lightSpread={1.6}
          rayLength={2.2}
          fadeDistance={1.2}
          saturation={1.2}
          followMouse={false}
        />
      </div>

      {/* Overlay biar soft */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* Text */}
      <div className="relative z-10 text-center px-6">
        <SplitText text="Welcome to my portfolio" className="text-4xl md:text-5xl font-semibold text-gray-900" splitType="words" delay={0.08} duration={1.3} />

        <SplitText text="Design. Development. Continuous Learning." className="mt-6 text-lg md:text-xl text-gray-700" splitType="words" delay={0.06} duration={1.1} from={{ y: 20, filter: "blur(6px)" }} />

        <p className="mt-10 text-sm tracking-widest text-gray-600 uppercase">Click anywhere to enter</p>
      </div>
    </div>
  );
}

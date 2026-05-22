import React from "react";

export default function GlobalGridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none bg-[#0a0a0a]">
      {/* Subtle background glow highlights */}
      <div 
        className="absolute top-[-15%] left-[-15%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full opacity-[0.25]"
        style={{
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div 
        className="absolute bottom-[-15%] right-[-15%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full opacity-[0.2]"
        style={{
          background: "radial-gradient(circle, rgba(123, 110, 246, 0.1) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* SVG Grid with radial fade mask */}
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          maskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
        }}
      >
        <defs>
          {/* Grid pattern combining blueprint lines and dots */}
          <pattern
            id="global-blueprint-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Blueprint Grid Lines (Cyan at ~8% opacity) */}
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(0, 229, 255, 0.08)"
              strokeWidth="0.75"
            />
            {/* Grid Subdivision Lines (Subtle white at ~4% opacity) */}
            <path
              d="M 30 0 L 30 60 M 0 30 L 60 30"
              fill="none"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth="0.5"
              strokeDasharray="2, 2"
            />
            {/* Tech Dots at Intersections (Cyan at ~12% opacity) */}
            <circle cx="0" cy="0" r="1.5" fill="rgba(0, 229, 255, 0.12)" />
            <circle cx="60" cy="0" r="1.5" fill="rgba(0, 229, 255, 0.12)" />
            <circle cx="0" cy="60" r="1.5" fill="rgba(0, 229, 255, 0.12)" />
            <circle cx="60" cy="60" r="1.5" fill="rgba(0, 229, 255, 0.12)" />
          </pattern>
        </defs>

        {/* Fill the background canvas with the blueprint grid */}
        <rect width="100%" height="100%" fill="url(#global-blueprint-grid)" />
      </svg>
    </div>
  );
}

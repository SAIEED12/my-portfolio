import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20 lg:gap-80 flex-1">
        <div className="relative flex justify-center items-center lg:-mt-44">
          <img
            src="/Rectangle 2.png"
            className="absolute z-0 w-[90%] h-[90%] opacity-50"
            style={{ top: "80px", left: "30px" }}
          />
          <img
            src="/IMG_0989-Photoroom.png"
            className="max-w-md lg:max-w-lg rounded-lg shadow-2xl relative z-10"
            alt="Hero"
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-extrabold whitespace-nowrap mb-2 tracking-tight">
            Hi, I'm <span>Abu Saieed!</span>
          </h1>
          <h3 className="text-2xl lg:text-3xl text-slate-400 font-medium tracking-wide">
            Aspiring <span className="text-cyan-400">Full Stack Developer</span>
          </h3>
          <p className="py-8 text-gray-400 text-lg leading-relaxed max-w-lg">
            I am an aspiring full-stack developer who enjoys building modern,
            responsive, and user-friendly web applications. I love turning ideas
            into functional digital products and continuously learning new
            technologies to stay up to date.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary bg-cyan-600 border-none hover:bg-cyan-500 px-8 text-white">
              Contact Me
            </button>
            <button className="btn btn-outline border-slate-600 hover:bg-slate-800 text-slate-300 px-8">
              View Resume
            </button>
          </div>
        </div>
      </div>
      {/* Horizontal divider */}
      <div className="w-full px-8 lg:px-24 mb-40">
        <hr className="border-t border-cyan-500/40" />
      </div>
    </div>
  );
};

export default Hero;

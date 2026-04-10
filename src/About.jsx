import React from "react";

const About = () => {
  return (
    <section className="text-white py-20 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-40 w-48 h-48 bg-cyan-900/10 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="relative w-full lg:w-1/2 flex justify-center items-center py-10">
          <div className="absolute w-72 h-104 lg:w-80 lg:h-120 bg-cyan-500/20 rotate-12 -z-10 translate-x-6"></div>

          <div className="relative z-10 overflow-hidden rounded-lg">
            <img
              src="/unnamed-Photoroom.png" 
              alt="Abu Saieed Profile"
              className="w-96 lg:w-104 object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Welcome to my web portfolio! I'm Abu Saieed, an aspiring
              full-stack developer with a passion for creating modern,
              attractive, and responsive web experiences. With skills in HTML,
              CSS, and JavaScript, I focus on elegant design and optimal
              performance.
            </p>
            <p>
              Explore my various projects here, which encompass responsive
              design and captivating interactivity. I believe every click should
              bring users closer to business goals. I enjoy collaborating and
              bringing creative ideas to life.
            </p>
            <p>
              Let's discuss how I can help you achieve your online vision. Thank
              you for visiting!
            </p>
          </div>
        </div>
      </div>


      <div className="mt-24 max-w-5xl mx-auto">
        <div className="h-0.5 w-full bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default About;

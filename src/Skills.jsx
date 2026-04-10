import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color:
        "hover:shadow-[0_0_20px_rgba(227,79,38,0.3)] hover:border-[#e34f26]",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color:
        "hover:shadow-[0_0_20px_rgba(21,114,182,0.3)] hover:border-[#1572b6]",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color:
        "hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:border-[#06b6d4]",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color:
        "hover:shadow-[0_0_20px_rgba(247,223,30,0.3)] hover:border-[#f7df1e]",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color:
        "hover:shadow-[0_0_20px_rgba(97,218,251,0.3)] hover:border-[#61dafb]",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color:
        "hover:shadow-[0_0_20px_rgba(51,153,102,0.3)] hover:border-[#339966]",
    },
  ];

  return (
    <section className="bg-[#0b0e11] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-bold mb-4 tracking-wide">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-16 leading-relaxed">
          As a Developer, I specialize in building responsive,
          high-performance web applications. Below are the core technologies and
          modern tools I leverage to turn complex designs into functional,
          user-centric digital experiences.
        </p>

        {/* Skills Container */}
        <div className="relative">

          <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] rounded-full -z-10"></div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 bg-[#161b22]/40 p-10 rounded-3xl backdrop-blur-xl border border-white/10 shadow-inner ">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative w-24 h-24 flex items-center justify-center bg-[#1c2128] rounded-2xl border border-white/5 transition-all duration-500 hover:-translate-y-3 cursor-pointer ${skill.color}`}
              >

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 transition-transform duration-500 group-hover:scale-125"
                />

                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <div className="w-full max-w-4xl h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

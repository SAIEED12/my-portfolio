import React from "react";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "BPL-Dream-11",
      image: "/Screenshot_1.jpg",
      liveLink: "https://bpl-dream-11-demo.netlify.app/",
      github: "https://github.com/SAIEED12/BPL-Dream-11",
    },
    {
      id: 2,
      title: "GitHub Issues Tracker",
      image: "/Screenshot_2.jpg",
      liveLink: "https://github-issue-tracker-demo.netlify.app/",
      github: "https://github.com/saieed12",
    },
    {
      id: 3,
      title: "Job Application Tracker",
      image: "/Screenshot_3.jpg",
      liveLink: "https://saieed12.github.io/A04-Job-Tracker/",
      github: "https://github.com/SAIEED12/A04-Job-Tracker",
    },
  ];

  return (
    <section className="bg-[#1E1E1E] text-white py-20 px-6 lg:px-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
          Take a look at some of my recent work. Each project is a unique piece
          of development, showcasing my skills and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projectData.map((project) => (
          <div key={project.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-4 bg-zinc-800 aspect-video shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-cyan-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-700 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-zinc-600 transition-colors border border-zinc-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Repo
                </a>
              </div>
            </div>

            <div className="space-y-1">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 hover:text-cyan-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <h3 className="text-lg font-semibold tracking-wide">
                  {project.title}
                </h3>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <a
          href="https://github.com/SAIEED12?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 cursor-pointer hover:bg-cyan-600 transition-all text-white px-8 py-3 rounded-md flex items-center gap-2 font-bold uppercase tracking-wider text-sm shadow-lg shadow-cyan-500/20"
        >
          Show All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <div className="h-px w-full bg-linear-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Projects;

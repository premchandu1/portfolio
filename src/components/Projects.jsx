import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Task Manager Web App",
      description:
        "A full-stack task management application with login, register, task CRUD features, built using React, Spring Boot, and MongoDB.",
      github: "https://github.com/premchandu1/task2-bootstrap-template", 
      live: "#",
      tech: ["React", "Spring Boot", "MongoDB"],
    },
    {
      title: "Sales Dashboard (Power BI)",
      description:
        "Interactive dashboard to analyze sales trends, KPIs, and performance using Power BI and Excel.",
      github: "https://github.com/premchandu1/Sales-Dashboard",
      live: "#",
      tech: ["Power BI", "Excel", "Data Analysis"],
    },
    {
      title: "Personal Portfolio",
      description:
        "My personal portfolio website built with React, Tailwind CSS, and Vite.",
      github: "https://github.com/premchandu1/portfolio",
      live: "https://prem-chandu-portfolio.netlify.app/",
      tech: ["React", "Tailwind CSS", "Vite"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2
          className="text-3xl font-bold text-center text-white mb-14"
          data-aos="fade-up"
        >
          Projects
        </h2>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="
                bg-white rounded-xl p-6
                shadow-md
                hover:-translate-y-2 hover:shadow-xl
                transition-all duration-300
                flex flex-col justify-between
              "
            >
              {/* PROJECT INFO */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition"
                >
                  <FaGithub /> GitHub
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

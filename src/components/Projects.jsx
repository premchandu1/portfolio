export default function Projects() {
  const projects = [
    {
      title: "Sales Dashboard",
      description:
        "Interactive dashboard using Excel & Power BI to analyze sales trends, KPIs, and performance metrics.",
    },
    {
      title: "Task Manager App",
      description:
        "Full-stack CRUD application built using React and Spring Boot with user-friendly UI.",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-12 text-black">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                {project.title}
              </h3>

              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

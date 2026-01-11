export default function Skills() {
  const skills = [
    "Excel",
    "SQL",
    "Power BI",
    "Python (Basic)",
    "GitHub",
    "Data Analysis",
  ];

  return (
    <section
      id="skills"
      className="bg-gray-100 py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl font-semibold text-center mb-12 text-black">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
  key={skill}
  className="bg-white text-black rounded-lg py-6 text-center font-medium shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform"
>
  {skill}
</div>

          ))}
        </div>

      </div>
    </section>
  );
}

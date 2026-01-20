export default function Skills() {
  const skills = [
    { name: "Excel" },
    { name: "SQL" },
    { name: "Power BI" },
    { name: "Python" },
    { name: "GitHub" },
    { name: "Data Analytics" },
  ];

  return (
    <section
      id="skills"
      className="bg-black py-24 text-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2
          className="text-3xl font-bold text-center mb-14"
          data-aos="fade-up"
        >
          Skills
        </h2>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                bg-white text-black rounded-xl p-6
                flex flex-col items-center justify-center
                shadow-md
                hover:-translate-y-2 hover:shadow-xl
                transition-all duration-300
              "
              data-aos="zoom-in"
            >
              {/* TITLE ONLY */}
              <p className="font-semibold text-lg tracking-wide">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

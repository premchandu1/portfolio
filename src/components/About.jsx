export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-12 text-white">
          About Me
        </h2>

        {/* ABOUT CARD */}
        <div
          className="bg-white text-black rounded-lg p-8
                     shadow-sm hover:shadow-md
                     transition-all duration-200"
        >
          <p className="text-gray-700 leading-relaxed text-lg">
            I am a final-year BTech Computer Science student with a strong
            interest in Data Analytics. I enjoy working with data, building
            dashboards, and extracting meaningful insights using tools like
            Excel, SQL, and Power BI. I am highly motivated, a quick learner,
            and open to opportunities where I can grow and contribute.
          </p>
        </div>

      </div>
    </section>
  );
}

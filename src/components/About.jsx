export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2
          className="text-3xl font-bold text-center text-white mb-12"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT — ABOUT TEXT */}
          <div
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10"
            data-aos="fade-right"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a final-year BTech Computer Science student with strong
              interest in <span className="text-cyan-400 font-semibold">Data Analytics</span>.
              I enjoy turning raw data into meaningful insights using tools like
              <span className="font-semibold text-white"> Excel, SQL, and Power BI</span>.
              I’m a quick learner, dedicated, and excited to work on real-world
              data problems.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              My goal is to grow as a Data Analyst by working on impactful
              projects, dashboards, and business insights.
            </p>
          </div>

          {/* RIGHT — STATS */}
          <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
            <div
              className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-black">3+</h3>
              <p className="text-gray-600 text-sm">Tools Learned</p>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-black">5+</h3>
              <p className="text-gray-600 text-sm">Projects Built</p>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-black">1+</h3>
              <p className="text-gray-600 text-sm">Internships Completed</p>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-black">100%</h3>
              <p className="text-gray-600 text-sm">Learning Mindset</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

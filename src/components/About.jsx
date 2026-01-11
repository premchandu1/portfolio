export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-24 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold text-white mb-10">
          About Me
        </h2>

        {/* ABOUT CARD */}
        <div
          className="
            bg-white text-gray-800
            rounded-xl p-8 md:p-10
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300
            max-w-4xl mx-auto
          "
        >
          <p className="text-lg leading-relaxed">
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

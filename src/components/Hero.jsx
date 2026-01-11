import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-20">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Prem Chandu</span>
          </h1>

          <p className="text-gray-400 mb-8 text-lg">
            Aspiring Data Analyst
          </p>

          <div className="flex gap-4">
            <a
              href="/Prem_Chandu_Resume.pdf.pdf"
              download
              className="bg-cyan-400 text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-cyan-500 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-md text-sm hover:bg-cyan-400 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <div className="w-56 h-56 md:w-60 md:h-60 rounded-full border-4 border-cyan-400 flex items-center justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

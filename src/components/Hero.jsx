import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center pt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Prem Chandu
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            Aspiring Data Analyst | Turning data into insights
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a
              href="/Prem_Chandu_Resume.pdf.pdf"
              download
              className="bg-cyan-400 text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-cyan-500 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
<div className="flex justify-center items-center" data-aos="fade-left">
  <div className="
    w-56 h-56 md:w-60 md:h-60 
    rounded-full 
    border-4 border-cyan-400 
    flex items-center justify-center
    shadow-lg
    transition-none
  ">
    <img
      src={profile}
      alt="Profile"
      className="w-full h-full rounded-full object-cover"
      style={{ transform: "none" }}
    />
  </div>
</div>


      </div>
    </section>
  );
}

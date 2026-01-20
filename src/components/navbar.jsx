export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO / NAME */}
        <h1
          className="text-xl font-bold text-white tracking-wide"
          data-aos="fade-down"
        >
          Prem Chandu
        </h1>

        {/* NAV LINKS */}
        <div
          className="hidden md:flex space-x-8 text-sm font-medium text-gray-300"
          data-aos="fade-down"
        >
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>

          <a href="#about" className="hover:text-cyan-400 transition">About</a>

          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>

          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>

          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}

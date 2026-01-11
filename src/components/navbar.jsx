export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO / NAME */}
        <h1 className="text-lg font-semibold text-white">
          Prem Chandu
        </h1>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

      </div>
    </nav>
  );
}

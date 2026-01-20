export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">

        {/* NAME */}
        <h3 className="text-lg font-semibold">
          Prem Chandu
        </h3>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 text-sm">
          <a
            href="https://github.com/premchandu1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/prem-chandu-9b745a282/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Prem Chandu. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

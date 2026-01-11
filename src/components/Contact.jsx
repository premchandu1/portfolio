export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-24 border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-semibold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out to me for opportunities or collaborations.
        </p>

        {/* CONTACT DETAILS */}
        <div className="space-y-4 text-gray-300">
          <p>
            📧 <span className="text-white">premchanduchandu@email.com</span>
          </p>

          <p>
            🔗{" "}
            <a
              href="https://github.com/premchandu1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            {"  |  "}
            <a
              href="https://www.linkedin.com/in/prem-chandu-9b745a282/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </p>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} Prem Chandu. All rights reserved.
        </p>
      </div>
    </section>
  );
}

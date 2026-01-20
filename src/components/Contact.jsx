export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-24 text-white scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2
          className="text-3xl font-bold text-center mb-14"
          data-aos="fade-up"
        >
          Contact
        </h2>

        {/* CONTACT CARD */}
        <div
          className="
            max-w-3xl mx-auto
            bg-white text-black
            rounded-xl p-8 md:p-10
            shadow-lg
            hover:shadow-xl hover:-translate-y-1
            transition-all duration-300
          "
          data-aos="zoom-in"
        >
          <p className="text-center text-gray-700 mb-8">
            Feel free to reach out for opportunities, collaborations,
            or just a quick conversation.
          </p>

          {/* CONTACT DETAILS */}
          <div className="space-y-6 text-center">

            {/* Email */}
            <p className="text-lg font-medium">
              📧 Email:
              <span className="block text-cyan-600 break-all">
                premchanduchandu779@gmail.com
              </span>
            </p>

            {/* Mobile Number */}
            <p className="text-lg font-medium">
              📞 Mobile:
              <span className="block text-cyan-600">
                +91 7093790711
              </span>
            </p>

            {/* LinkedIn */}
            <p className="text-lg font-medium">
              🔗 LinkedIn:
              <a
                href="https://www.linkedin.com/in/prem-chandu-9b745a282/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyan-600 hover:underline"
              >
                linkedin.com/in/prem-chandu-9b745a282/
              </a>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

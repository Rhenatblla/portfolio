export default function About() {
  return (
    <section id="about" className="relative z-10 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white py-28 overflow-hidden">
      {/* Accent background */}
      <div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-3xl -z-10" />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* TEXT */}
        <div className="flex flex-col justify-start">
          <h3 className="text-3xl md:text-4xl font-semibold">About Me</h3>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed text-justify">
            Hi, I’m <span className="text-pink-500 font-medium">Rhena Tabella</span>, an Informatics Engineering graduate from Trisakti University with a strong interest in digital product development, particularly in Front-End Development,
            UI/UX Design, and Quality Assurance (QA). I enjoy the process of developing digital products, from designing user interfaces and implementing features to conducting functional testing to ensure applications work properly and
            provide a good user experience.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed text-justify">
            I’m a detail-oriented, adaptable, and proactive individual with a strong willingness to learn and grow. I enjoy exploring new technologies, developing creative ideas, and collaborating with others to solve technical challenges.
            I’m currently open to opportunities where I can continue developing my skills and contribute to meaningful digital products in a professional environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "REST API", "MongoDB", "Git", "GitHub", "Figma", "UI/UX Design", "Quality Assurance", "Manual Testing", "UAT"].map(
              (skill) => (
                <span key={skill} className="px-4 py-2 text-sm rounded-full bg-pink-100 text-pink-600 font-medium">
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-end md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-300/30 rounded-3xl blur-2xl" />
            <div className="relative rounded-full bg-gradient-to-tr from-pink-400 via-pink-300 to-pink-500 p-1">
              <img src="/Rhena.jpg" alt="Rhena Tabella" className="w-64 h-64 object-cover rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

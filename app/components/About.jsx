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

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Halo, Aku <span className="text-pink-500 font-medium">Rhena Tabella</span>, mahasiswa Teknik Informatika dari Universitas Trisakti yang selalu semangat mencoba hal-hal baru dan belajar hal-hal seru. Aku punya ketertarikan besar
            pada pengembangan front-end, desain UI/UX, dan testing web (QA), karena rasanya menyenangkan memastikan setiap proyek digital berjalan lancar dan berkualitas.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Selain coding, aku suka mengeksplor tren teknologi, bereksperimen dengan desain, membuat sketsa, menonton hal inspiratif, atau menikmati segelas jus 🍹✨. Bagiku, energi positif dan rasa ingin tahu membuat setiap tantangan lebih
            menyenangkan, dan setiap proyek kesempatan untuk belajar dan berkembang.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Figma", "UI/UX"].map((skill) => (
              <span key={skill} className="px-4 py-2 text-sm rounded-full bg-pink-100 text-pink-600 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-end md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-300/30 rounded-3xl blur-2xl" />
            <div className="relative rounded-full bg-gradient-to-tr from-pink-400 via-pink-300 to-pink-500 p-1">
              <img src="/Profile.JPG" alt="Rhena Tabella" className="w-64 h-64 object-cover rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative isolate w-full overflow-hidden px-6 pt-44 pb-32 flex flex-col items-center text-center">
      {/* PINK GLOW */}
      <div className="pointer-events-none absolute inset-0 flex justify-center -z-10">
        <div className="absolute w-[520px] h-[520px] bg-pink-300/40 rounded-full blur-3xl -translate-x-40" />
        <div className="absolute w-[520px] h-[520px] bg-pink-200/40 rounded-full blur-3xl translate-x-40" />
      </div>

      <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
        Hi, I’m <span className="text-pink-500">Rhena</span> 👋
      </h2>

      <p className="mt-6 max-w-2xl text-gray-600 text-lg">Mahasiswa Teknik Informatika | Front-End Developer Enthusiast | UI/UX Enthusiast Menciptakan pengalaman digital yang menarik dan berkualitas.</p>

      <div className="mt-10 flex gap-4">
        {/* View Projects */}
        <a href="#projects" className="px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
          View Projects
        </a>

        {/* Contact Me */}
        <a href="#footer" className="px-6 py-3 rounded-full border border-gray-300 hover:border-pink-500 transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}

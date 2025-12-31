"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur px-10 py-6 flex items-center justify-between shadow-sm">
      {/* LEFT - LOGO */}
      <h1 className="font-semibold text-lg text-pink-500">Portofolio Rhena Tabella</h1>

      {/* CENTER - MENU */}
      <ul className="flex gap-12 text-sm tracking-wide font-medium">
        <li>
          <a href="#hero" className="text-pink-400 hover:text-pink-600 transition">
            HOME
          </a>
        </li>

        <li>
          <a href="#about" className="text-pink-400 hover:text-pink-600 transition">
            ABOUT ME
          </a>
        </li>

        <li>
          <a href="#projects" className="text-pink-400 hover:text-pink-600 transition">
            PROJECTS
          </a>
        </li>

        <li>
          <a href="#experience" className="text-pink-400 hover:text-pink-600 transition">
            EXPERIENCE
          </a>
        </li>

        <li>
          <a href="#footer" className="text-pink-400 hover:text-pink-600 transition">
            CONTACT
          </a>
        </li>
      </ul>

      {/* RIGHT - SEARCH */}
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-pink-200">
        <input type="text" placeholder="Search" className="outline-none text-sm w-28 bg-transparent text-gray-600 placeholder-gray-400" />
        <span className="ml-2 text-pink-400">🔍</span>
      </div>
    </nav>
  );
}

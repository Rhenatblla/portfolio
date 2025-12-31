import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-pink-200 px-8 py-16 text-center text-gray-600">
      {/* TITLE */}
      <p className="text-base text-gray-600 mb-6">Let’s connect with me</p>

      {/* CONTACT HORIZONTAL */}
      <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-sm">
        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail size={18} className="text-pink-500" />
          <span className="text-gray-600 font-medium">Email:</span>
          <a href="mailto:rhenatabella@email.com" className="hover:text-pink-500 transition">
            rhenatabella@email.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-2">
          <Linkedin size={18} className="text-pink-500" />
          <span className="text-gray-600 font-medium">LinkedIn:</span>
          <a href="https://www.linkedin.com/in/rhena-tabella/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            linkedin.com/in/rhena-tabella/
          </a>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-2">
          <Instagram size={18} className="text-pink-500" />
          <span className="text-gray-600 font-medium">Instagram:</span>
          <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            @Rhenatbla
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-xs text-gray-400">© {new Date().getFullYear()} Rhena Tabella. All rights reserved.</p>
    </footer>
  );
}

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white animate-fadeIn">
      <Navbar />

      {/* CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
      <Footer />
    </main>
  );
}

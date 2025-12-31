"use client";
import { useState } from "react";
import { Figma, Instagram } from "lucide-react";

const projects = [
  {
    title: "Grapholyze",
    role: "AI Handwriting Analysis Web",
    status: "On Going",
    description:
      "Grapholyze AI adalah pengembangan sistem berbasis kecerdasan buatan (AI) yang mampu menganalisis tulisan tangan seseorang dengan cepat, akurat, dan objektif. Proyek ini bertujuan untuk menjembatani kebutuhan masyarakat, institusi pendidikan, perusahaan, maupun lembaga psikologi dalam melakukan penilaian kepribadian, potensi, atau kecenderungan perilaku melalui analisis grafologi yang modern dan efisien.",
    images: ["/projects/grapholyze/1.jpeg", "/projects/grapholyze/2.jpeg", "/projects/grapholyze/3.jpeg", "/projects/grapholyze/4.jpeg"],
  },
  {
    title: "UI Web PPID BNPB",
    role: "Design UI",
    status: "Completed",
    description:
      "Design UI WEB PPID BNPB merupakan tugas pada kegiatan magang di BNPB. Website PPID BNPB berfungsi sebagai platform resmi layanan informasi publik kebencanaan di Indonesia, mendukung transparansi, keterbukaan informasi, serta penyediaan data kebencanaan bagi masyarakat.",
    images: ["/projects/PPID/ppid-1.png", "/projects/PPID/ppid-2.png", "/projects/PPID/ppid-3.png", "/projects/PPID/ppid-4.png"],
    uiLink: "https://www.figma.com/design/Pu7xkGfDWWntSTlWRhX4wP/e-PPID-BNPB?node-id=0-1&t=oew7eFJQDOhRkgJP-1",
  },
  {
    title: "Donor Darah Bersama Kepresma",
    role: "Kepresidenan Mahasiswa Universitas Trisakti",
    status: "Completed",
    description:
      "Kegiatan donor darah sebagai bentuk kepedulian sosial dan kontribusi kemanusiaan di lingkungan kampus. Terlibat dalam sosialisasi kegiatan, mendukung kelancaran acara, serta mengembangkan kemampuan kerja sama tim dan tanggung jawab sosial.",
    images: ["/projects/donordarah/donor-1.jpeg", "/projects/donordarah/donor-2.jpeg", "/projects/donordarah/donor-3.jpeg"],
    uiLink: "https://www.instagram.com/p/DCYRUuwyfX9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Security Awareness in Action: Understanding Digital Threats and Building Stronger Web Protection",
    role: "Himpunan Mahasiswa Teknik Informatika & Sistem Informasi Universitas Trisakti",
    status: "Completed",
    description: "Kegiatan edukatif yang berfokus pada peningkatan kesadaran keamanan digital, memahami ancaman siber, dan penerapan perlindungan web yang lebih kuat melalui pendekatan praktis dan konseptual.",
    images: ["/projects/seminar/seminar-1.jpg", "/projects/seminar/seminar-2.jpg", "/projects/seminar/seminar-3.jpg"],
    uiLink: "https://www.instagram.com/p/DP6a9i4kxOX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "Seminar Nasional : Meningkatkan Inklusifitas Perempuan di Indonesia (Mengintegritaskan Perspektif Gender dalam Kebijakan Publik)",
    role: "Kepresidenan Mahasiswa Universitas Trisakti",
    status: "Completed",
    description:
      "Seminar ini membahas peningkatan peran perempuan di Indonesia dengan menekankan pentingnya memasukkan perspektif gender dalam kebijakan publik. Acara ini bertujuan mendorong kesetaraan, memberdayakan perempuan, dan menciptakan kebijakan yang adil serta inklusif, sekaligus menjadi ruang diskusi bagi pemerintah, akademisi, dan masyarakat untuk berbagi strategi dan praktik terbaik.",
    images: ["/projects/pp/pp-1.jpeg", "/projects/pp/pp-2.jpeg", "/projects/pp/pp-3.jpeg"],
    uiLink: "https://www.instagram.com/p/C-H60vxy6_G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const next = () => setIndex((i) => (i + 1) % project.images.length);
  const prev = () => setIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* IMAGE */}
        <div className="relative h-52 group">
          <img src={project.images[index]} alt={project.title} onClick={() => setOpen(true)} className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-105" />

          {/* NAV BUTTON */}
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-2 py-1 rounded-full shadow">
            ‹
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-2 py-1 rounded-full shadow">
            ›
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-semibold text-lg">{project.title}</h4>

            {project.status === "On Going" && <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-600">On Going</span>}

            {project.status === "Completed" && <span className="text-xs px-2 py-0.5 rounded-full bg-green-200 text-green-800">Completed</span>}
          </div>

          <p className="text-sm text-pink-500 mt-1 font-medium">{project.role}</p>

          <p className="mt-3 text-sm text-gray-600 leading-relaxed">{project.description}</p>

          {/* 🔗 AUTO-DETECT UI LINK */}
          {project.uiLink && (
            <a href={project.uiLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline transition">
              {project.uiLink.includes("figma.com") && (
                <>
                  <Figma size={16} className="text-blue-600" />
                  <span className="text-blue-600">UI Web Design (Figma)</span>
                </>
              )}

              {project.uiLink.includes("instagram.com") && (
                <>
                  <Instagram size={16} className="text-pink-500" />
                  <span className="text-pink-500">Documentation (Instagram)</span>
                </>
              )}
            </a>
          )}
        </div>
      </div>

      {/* MODAL ZOOM */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6" onClick={() => setOpen(false)}>
          <img src={project.images[index]} alt={project.title} className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" />
        </div>
      )}
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h3 className="text-3xl font-semibold text-center">Selected Projects & Activities</h3>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

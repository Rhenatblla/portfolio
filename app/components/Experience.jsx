"use client";

import { useState } from "react";

function PhotoCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-lg">
      {/* Image */}
      <img src={images[index]} alt="Experience documentation" className="w-full h-full object-cover transition-opacity duration-500" />

      {/* Controls */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur px-3 py-1 rounded-full hover:bg-white transition">
        ‹
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur px-3 py-1 rounded-full hover:bg-white transition">
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === index ? "bg-pink-500" : "bg-white/60"}`} />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-8 py-32 max-w-6xl mx-auto">
      {/* Title */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold">Experience & Organization</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Professional experience, internships, and organizational activities.</p>
      </div>

      <div className="space-y-28">
        {/* ================= JAMKRINDO ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-pink-500">PT Jamkrindo Syariah</h3>
            <p className="mt-2 text-gray-500">Quality Assurance / UAT. 2025</p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>
                Melakukan proses pengujian untuk memastikan bahwa semua fitur dan fungsi website berjalan sesuai dengan spesifikasi yang ditentukan. Pengujian mencakup validasi alur sistem, pengecekan tampilan UI/UX, dan identifikasi error
                atau bug.
              </li>
              <li>Berkoordinasi secara berkala dengan pihak vendor pengembang website untuk menyampaikan hasil pengujian, melaporkan bug atau kesalahan sistem, serta mendiskusikan kebutuhan perbaikan dan pengembangan fitur baru.</li>
              <li>
                Menyusun laporan hasil testing dalam bentuk dokumentasi tertulis, termasuk deskripsi bug, langkah reproduksi, serta screenshot sebagai bukti pendukung. Laporan ini digunakan sebagai dasar dalam proses perbaikan sistem oleh
                vendor.
              </li>
              <li>Menguji kembali fitur-fitur yang sebelumnya mengalami bug untuk memastikan bahwa perbaikan telah dilakukan dengan benar dan tidak menimbulkan error baru di bagian lain dari sistem.</li>
            </ul>
          </div>

          <PhotoCarousel images={["/experience/jamkrindo-1.jpg", "/experience/jamkrindo-2.jpg", "/experience/jamkrindo-3.jpg", "/experience/jamkrindo-4.jpg", "/experience/jamkrindo-5.jpg"]} />
        </div>

        {/* ================= BNPB ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <PhotoCarousel images={["/experience/bnpb-1.jpg", "/experience/bnpb-2.jpg", "/experience/bnpb-3.jpg", "/experience/bnpb-4.jpg", "/experience/bnpb-5.jpg"]} />

          <div>
            <h3 className="text-2xl font-semibold text-pink-500">Badan Nasional Penanggulangan Bencana </h3>
            <p className="mt-2 text-gray-500">Pusat Data Informasi dan Pusat Kebencanaan · 2025</p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Melakukan pengujian endpoint API menggunakan metode GET untuk memvalidasi integritas, keakuratan, dan ketersediaan data pada sistem JDIH BNPB.</li>
              <li>Berkontribusi dalam perancangan dan pengembangan antarmuka pengguna (UI) pada website PPID BNPB guna meningkatkan kemudahan akses informasi publik.</li>
              <li>Menyusun notulen rapat dan laporan evaluasi secara sistematis sebagai dokumentasi resmi dan bahan tindak lanjut kegiatan.</li>
            </ul>
          </div>
        </div>

        {/* ================= HIMPUNAN ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-pink-500">Himpunan Mahasiswa Teknik Informatika & Sistem Informasi</h3>
            <p className="mt-2 text-gray-500">Ketua Departemen Luar Negeri · 2025 – Present</p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Memimpin dan mengoordinasikan seluruh kegiatan Departemen Luar Negeri (LUGRI) di bawah naungan BPHMJTIF.</li>
              <li>Menjalin dan mengembangkan kerja sama antara mahasiswa, lembaga, dan instansi baik di dalam maupun luar Universitas Trisakti.</li>
              <li>Menginisiasi kolaborasi antar mahasiswa dan dosen dalam penyusunan proyek riset serta kegiatan pengembangan akademik.</li>
              <li>Studi Banding: Menyelenggarakan diskusi dan kunjungan antar kampus untuk bertukar wawasan dan pengalaman organisasi.</li>
              <li>Safari Industri: Melakukan kunjungan ke perusahaan teknologi untuk memberikan gambaran nyata tentang dunia kerja IT.</li>
              <li>Branding Jurusan: Memperkenalkan Jurusan Teknik Informatika dan Sistem Informasi kepada masyarakat dan calon mahasiswa.</li>
            </ul>
          </div>

          <PhotoCarousel images={["/experience/hmti-1.jpg", "/experience/hmti-2.jpg", "/experience/hmti-3.jpg"]} />
        </div>

        {/* ================= Kepresma ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <PhotoCarousel images={["/experience/presma1.jpeg", "/experience/presma2.jpeg", "/experience/kkn.jpeg", "/experience/donor-1.jpeg", "/experience/pp-1.jpeg"]} />

          <div>
            <h3 className="text-2xl font-semibold text-pink-500">Kepresidenan Mahasiswa Universitas Trisakti </h3>
            <p className="mt-2 text-gray-500">Kementerian Pemberdayaan Perempuan · 2024-2025</p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Mengedukasi anggota organisasi tentang isu-isu gender, kesetaraan, dan inklusivitas.</li>
              <li>Merancang workshop, seminar, atau kampanye yang mendukung peran aktif perempuan di kampus.</li>
              <li>Menjadi penghubung bagi anggota perempuan untuk mendapatkan pendampingan atau perlindungan dari isu diskriminasi atau kekerasan.</li>
              <li>Bekerja sama dengan kementerian lain atau pihak eksternal untuk program yang mendukung kesetaraan dan pemberdayaan perempuan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

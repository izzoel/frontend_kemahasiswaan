import Image from "next/image";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/sections/Hero";
import Layanan from "@/components/layouts/sections/Layanan";
import Post from "@/components/layouts/sections/Post";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black">

      <Header />

      <div className="space-y-5">
        <Hero />
      </div>
      <Layanan />
      <Post />


      {/* <header className="w-full top-0 sticky shadow-md flex flex-col bg-primary dark:bg-primary z-50">
        <div className="flex items-center justify-between px-container-padding py-4 max-w-full">
          <div className="flex items-center gap-4">
            <img alt="University Crest" className="w-12 h-12 rounded-full bg-surface-container object-cover"
              data-alt="University crest logo, modern minimalist, dark blue and white, crisp lines, professional academic aesthetic, flat design style, highly legible."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9dN__BjzpoDigw3YXHXYs4MckxeMVzzdc9dtrfm5SxQnk-dIFw12_qRl7Icu361CL7Y9zyhe-0gqa4Q4g7Nk0FTHKjWwBjQYQMVeB0YK4_z8yj9937slivgpjiPLp428H3jTUUEWJtTIGe_SUZX6zVi_rIkavEH8S3UBoWVbGAoHVgCylNu1Xqb-xs16NkMQx5zvsrPAF_Myo8nJiRwS47ebXRLHovsYCIPZ8HmtZltuLu0f8kMc" />
            <div>
              <span
                className="block font-headline-md text-headline-md font-bold text-on-primary leading-tight">Student
                Portal</span>
              <span className="block font-body-sm text-body-sm text-on-primary/70">Lumina University</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 font-title-lg text-title-lg text-on-primary/80">
            <a className="text-on-primary border-b-2 border-secondary pb-1 whitespace-nowrap" href="#">Home</a>
            <a className="hover:text-on-primary whitespace-nowrap transition-colors" href="#">Campus News</a>
            <a className="hover:text-on-primary whitespace-nowrap transition-colors" href="#">Academic
              Services</a>
            <a className="hover:text-on-primary whitespace-nowrap transition-colors" href="#">Guidelines</a>
            <a className="hover:text-on-primary whitespace-nowrap transition-colors" href="#">Directory</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              className="hidden md:block bg-error text-on-error font-label-md text-label-md py-2 px-4 rounded-full hover:opacity-90 transition-opacity mr-2">Emergency
              Contacts</button>
            <span
              className="material-symbols-outlined text-on-primary cursor-pointer hover:bg-primary-container/20 p-2 rounded-full transition-colors">notifications</span>
            <span
              className="material-symbols-outlined text-on-primary cursor-pointer hover:bg-primary-container/20 p-2 rounded-full transition-colors">account_circle</span>
          </div>
        </div>

        <nav className="lg:hidden flex overflow-x-auto gap-6 px-container-padding pb-3 bg-primary">
          <a className="font-title-lg text-title-lg text-on-primary border-b-2 border-secondary pb-1 whitespace-nowrap"
            href="#">Home</a>
          <a className="font-title-lg text-title-lg text-on-primary/80 hover:text-on-primary whitespace-nowrap transition-colors"
            href="#">Campus News</a>
          <a className="font-title-lg text-title-lg text-on-primary/80 hover:text-on-primary whitespace-nowrap transition-colors"
            href="#">Academic Services</a>
          <a className="font-title-lg text-title-lg text-on-primary/80 hover:text-on-primary whitespace-nowrap transition-colors"
            href="#">Guidelines</a>
          <a className="font-title-lg text-title-lg text-on-primary/80 hover:text-on-primary whitespace-nowrap transition-colors"
            href="#">Directory</a>
        </nav>
      </header> */}

      {/* <div className="flex flex-1">
        <main className="flex-1 w-full p-container-padding pb-margin-lg bg-surface">
          <section className="mb-margin-lg">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-sm group">
              <img alt="Featured News Image"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Wide shot of a modern university campus courtyard during golden hour. Students walking and studying on modern minimalist concrete benches. High key lighting, clean architectural lines, academic blue and green subtle tones, professional photography."
                src="https://cloud.zetware.id/apps/files_sharing/publicpreview/YdQabbbpLk2kGiK?file=/&fileId=11550&x=2880&y=1800&a=true&etag=5e4fa903781865f71bbd4ee0b5fd98da" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-margin-md max-w-2xl text-on-primary">
                <span
                  className="bg-secondary text-on-primary font-label-md text-label-md px-3 py-1 rounded-full mb-4 inline-block">BERITA
                  UTAMA</span>
                <h2
                  className="font-display-lg text-display-lg md:text-display-lg text-headline-lg-mobile mb-4 font-bold leading-tight">
                  Peresmian Gedung Inovasi Baru untuk Mahasiswa Teknik</h2>
                <p className="font-body-lg text-body-lg text-on-primary/90 mb-6 hidden md:block">Rektor universitas
                  meresmikan fasilitas riset terbaru yang dilengkapi dengan laboratorium AI mutakhir dan ruang
                  kolaborasi terbuka.</p>
                <button
                  className="bg-on-primary text-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary-fixed transition-colors flex items-center gap-2">
                  Baca Selengkapnya
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>

          <section className="mb-margin-lg">
            <h3
              className="font-headline-lg text-headline-lg md:text-headline-lg text-headline-lg-mobile text-primary mb-gutter border-b border-outline-variant pb-2">
              Postingan Kemahasiswaan</h3>
            <div className="flex flex-col lg:flex-row gap-gutter">
              <div className="w-full lg:w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <a className="bg-surface-container-lowest rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group overflow-hidden flex flex-col h-full"
                    href="#">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img alt="Robotik Competition"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Students working on a robotics project in a lab setting, focused and collaborative."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcXcbR-9Di1PY1zEgt71aTZ33bTKCsf_pvcFvX6adLmxKYF0l5ABlZ1npzcZ7mSIBVQJRuHQDg9_BRuC8DBrh6CcarvMUdLyu0RsUlf3fQV2jZBjDo9Nqyto0XNsdvyp7fHZdFiK0mEYBLRvCVTHO30p_twYzn1ph6rzj_g1_fhIvvwtpSoyIJOsKDrm3M2pOKFtiWm2mX42KnrXv9YO-3ScmF0ZL-L4w_1EC2m8vOuS-6XA0QLJ-S" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span
                        className="bg-secondary/10 text-secondary font-label-md text-label-md px-3 py-1 rounded-full w-fit mb-3">PRESTASI</span>
                      <h4
                        className="font-title-lg text-title-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
                        Pemenang Kompetisi Robotik Nasional 2024</h4>
                      <p
                        className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1 line-clamp-3">
                        Tim mahasiswa Fakultas Teknik berhasil meraih juara pertama dalam kompetisi
                        robotik tingkat nasional yang diselenggarakan di Jakarta.</p>
                      <span
                        className="font-label-md text-label-md text-primary flex items-center gap-1 mt-auto group-hover:underline">Read
                        More <span
                          className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
                    </div>
                  </a>
                  <a className="bg-surface-container-lowest rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group overflow-hidden flex flex-col h-full"
                    href="#">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img alt="Career Seminar"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="A professional giving a presentation in a lecture hall to attentive students."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnNPtGWmZwlQjs4DhcU_OJS_MFVw8F1coCLOaEeQ2NU1Ksbqo_ZwJLJtXfnYomO9GuMaZwnaBn_yNyQq8w1RVsemG_qxfXRuspRJR-TpjK5SDminx64Qp529jdfJoPROoJTNWnVOZZIqSxiX61oR3XtaFd_lNqbBBiol7H2nl8DQUuGWPvIaFKPQ26yDTXGrw-8V067yavNsgYmTAPNXOsFApJ1BSf4Px1UMbUoPkyz4wrFdOfthbl" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span
                        className="bg-tertiary-container/10 text-tertiary-container font-label-md text-label-md px-3 py-1 rounded-full w-fit mb-3">SEMINAR</span>
                      <h4
                        className="font-title-lg text-title-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
                        Seminar Karir Masa Depan di Era Digital</h4>
                      <p
                        className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1 line-clamp-3">
                        Pusat Karir Universitas mengadakan seminar dengan pembicara dari berbagai
                        perusahaan teknologi terkemuka untuk mempersiapkan lulusan.</p>
                      <span
                        className="font-label-md text-label-md text-primary flex items-center gap-1 mt-auto group-hover:underline">Read
                        More <span
                          className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
                    </div>
                  </a>
                  <a className="bg-surface-container-lowest rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group overflow-hidden flex flex-col h-full md:col-span-2"
                    href="#">
                    <div className="relative h-48 md:h-56 w-full overflow-hidden">
                      <img alt="Social Activity"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Group of students participating in a community service event, smiling and helping others."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9dK55arG5qYsOv5YbSehhcmfVSyWYqMwRGtfEmhP6c30YRTOvQ7GLzD2i5Num8KgJEhJzs9XP9FosH__p2JKpi_STdcNK9wk-bavZSj6OmwtWzYr0WnKU5vQr0p30PhMLaHDXGK-il3mkSduPo6QGv_EV3pDYvIPfXisxRH6DP8dFh1ypnaqAmHalUHmrvSklqqTLciLYToziNh23qCFxDRIUpoGvg-j7XZoHi7uhAqKTyfacORkI" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span
                        className="bg-primary/10 text-primary font-label-md text-label-md px-3 py-1 rounded-full w-fit mb-3">KEGIATAN</span>
                      <h4
                        className="font-title-lg text-title-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
                        Kegiatan Bakti Sosial Mahasiswa di Desa Binaan</h4>
                      <p
                        className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1 line-clamp-2 md:line-clamp-none">
                        Ratusan mahasiswa dari berbagai fakultas bergabung dalam program pengabdian
                        masyarakat untuk membantu pembangunan fasilitas desa dan memberikan edukasi
                        kesehatan.</p>
                      <span
                        className="font-label-md text-label-md text-primary flex items-center gap-1 mt-auto group-hover:underline">Read
                        More <span
                          className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-[30%]">
                <div
                  className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant h-full">
                  <h4 className="font-title-lg text-title-lg text-on-surface mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">campaign</span>
                    Informasi Terbaru
                  </h4>
                  <div className="flex flex-col gap-5">
                    <div
                      className="flex gap-4 items-start border-b border-surface-variant pb-4 last:border-0 last:pb-0">
                      <div className="mt-1 bg-error/10 p-2 rounded-full flex-shrink-0">
                        <span className="material-symbols-outlined text-error text-[20px]">warning</span>
                      </div>
                      <div>
                        <h5 className="font-title-lg text-body-md font-semibold text-on-surface mb-1">Batas
                          Akhir Bayar UKT</h5>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Pembayaran Uang
                          Kuliah Tunggal semester ganjil ditutup tanggal 15 Agustus.</p>
                        <span className="font-label-md text-label-md text-outline mt-2 block">2 Hari yang
                          lalu</span>
                      </div>
                    </div>
                    <div
                      className="flex gap-4 items-start border-b border-surface-variant pb-4 last:border-0 last:pb-0">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full flex-shrink-0">
                        <span
                          className="material-symbols-outlined text-primary text-[20px]">event_available</span>
                      </div>
                      <div>
                        <h5 className="font-title-lg text-body-md font-semibold text-on-surface mb-1">
                          Pendaftaran Wisuda Ke-50</h5>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Pendaftaran dibuka
                          untuk gelombang pertama secara online.</p>
                        <span className="font-label-md text-label-md text-outline mt-2 block">4 Hari yang
                          lalu</span>
                      </div>
                    </div>
                    <div
                      className="flex gap-4 items-start border-b border-surface-variant pb-4 last:border-0 last:pb-0">
                      <div className="mt-1 bg-tertiary-container/10 p-2 rounded-full flex-shrink-0">
                        <span
                          className="material-symbols-outlined text-tertiary-container text-[20px]">info</span>
                      </div>
                      <div>
                        <h5 className="font-title-lg text-body-md font-semibold text-on-surface mb-1">
                          Perubahan Ruang Kuliah Umum</h5>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Mata kuliah
                          Pengantar Bisnis pindah ke Auditorium Utama.</p>
                        <span className="font-label-md text-label-md text-outline mt-2 block">1 Minggu yang
                          lalu</span>
                      </div>
                    </div>
                    <div
                      className="flex gap-4 items-start border-b border-surface-variant pb-4 last:border-0 last:pb-0">
                      <div className="mt-1 bg-secondary-container/30 p-2 rounded-full flex-shrink-0">
                        <span
                          className="material-symbols-outlined text-secondary text-[20px]">schedule</span>
                      </div>
                      <div>
                        <h5 className="font-title-lg text-body-md font-semibold text-on-surface mb-1">
                          Jadwal Ujian Susulan</h5>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Segera lapor ke
                          prodi masing-masing maksimal lusa.</p>
                        <span className="font-label-md text-label-md text-outline mt-2 block">1 Minggu yang
                          lalu</span>
                      </div>
                    </div>
                  </div>
                  <a className="block w-full text-center mt-6 py-2 border border-outline-variant text-on-surface font-label-md text-label-md rounded-full hover:bg-surface-container-low transition-colors"
                    href="#">
                    Lihat Semua Pengumuman
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-margin-lg">
            <h3
              className="font-headline-lg text-headline-lg md:text-headline-lg text-headline-lg-mobile text-primary mb-gutter border-b border-outline-variant pb-2">
              Layanan Kami</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <a className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group flex flex-col items-start h-full"
                href="#">
                <div
                  className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-container/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[28px]">school</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface mb-2">Beasiswa &amp; Bantuan Finansial
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">Informasi pendaftaran,
                  persyaratan, dan jadwal pencairan dana beasiswa universitas maupun eksternal.</p>
                <span
                  className="font-label-md text-label-md text-secondary group-hover:underline flex items-center gap-1 mt-auto">Akses
                  Layanan <span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
              </a>
              <a className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group flex flex-col items-start h-full"
                href="#">
                <div
                  className="w-12 h-12 bg-tertiary-container/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-tertiary-container/20 transition-colors">
                  <span
                    className="material-symbols-outlined text-tertiary-container text-[28px]">psychology</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface mb-2">Pusat Konseling Mahasiswa</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">Jadwalkan sesi
                  konseling akademik atau psikologis dengan profesional. Rahasia dan aman.</p>
                <span
                  className="font-label-md text-label-md text-secondary group-hover:underline flex items-center gap-1 mt-auto">Akses
                  Layanan <span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
              </a>
              <a className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group flex flex-col items-start h-full"
                href="#">
                <div
                  className="w-12 h-12 bg-secondary-container/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary-container/50 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-[28px]">apartment</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface mb-2">Manajemen Asrama</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">Pengajuan kamar,
                  laporan kerusakan fasilitas, dan informasi tagihan asrama mahasiswa.</p>
                <span
                  className="font-label-md text-label-md text-secondary group-hover:underline flex items-center gap-1 mt-auto">Akses
                  Layanan <span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
              </a>
            </div>
          </section>
          <section className="mb-margin-lg">
            <h3
              className="font-headline-lg text-headline-lg md:text-headline-lg text-headline-lg-mobile text-primary mb-gutter border-b border-outline-variant pb-2">
              Pedoman Kampus</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <a className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group flex flex-col items-start h-full"
                href="#">
                <div
                  className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-container/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-[28px]">gavel</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface mb-2">Kode Etik Mahasiswa</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">Panduan perilaku dan
                  standar etika bagi seluruh mahasiswa di lingkungan universitas.</p>
                <span
                  className="font-label-md text-label-md text-secondary group-hover:underline flex items-center gap-1 mt-auto">Lihat
                  Pedoman <span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
              </a>
              <a className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group flex flex-col items-start h-full"
                href="#">
                <div
                  className="w-12 h-12 bg-tertiary-container/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-tertiary-container/20 transition-colors">
                  <span
                    className="material-symbols-outlined text-tertiary-container text-[28px]">assignment</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface mb-2">Prosedur Akademik</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">Informasi lengkap
                  mengenai pendaftaran semester, cuti akademik, dan syarat kelulusan.</p>
                <span
                  className="font-label-md text-label-md text-secondary group-hover:underline flex items-center gap-1 mt-auto">Lihat
                  Pedoman <span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
              </a>
              <a className="bg-surface-container-lowest p-6 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.04)] border border-surface-variant hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group flex flex-col items-start h-full"
                href="#">
                <div
                  className="w-12 h-12 bg-secondary-container/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary-container/50 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-[28px]">business</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface mb-2">Fasilitas Kampus</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">Panduan penggunaan
                  fasilitas umum, laboratorium, perpustakaan, dan area olahraga.</p>
                <span
                  className="font-label-md text-label-md text-secondary group-hover:underline flex items-center gap-1 mt-auto">Lihat
                  Pedoman <span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
              </a>
            </div>
          </section>
        </main>
      </div> */}

      {/* <footer
        className="w-full mt-auto border-t border-outline-variant flat no shadows bg-surface-container-high dark:bg-surface-container-high">
        <div className="flex flex-col md:flex-row justify-between items-center px-container-padding py-margin-md gap-4">
          <span className="font-title-lg text-title-lg text-primary">Lumina University</span>
          <div className="flex flex-wrap gap-6 font-label-md text-label-md">
            <a className="text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-opacity duration-150"
              href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-opacity duration-150"
              href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-opacity duration-150"
              href="#">Accessibility</a>
            <a className="text-on-surface-variant hover:text-primary hover:underline decoration-secondary transition-opacity duration-150"
              href="#">Contact Support</a>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant">© 2024 Lumina University. All rights
            reserved.</p>
        </div>
      </footer> */}

    </div>
  );
}

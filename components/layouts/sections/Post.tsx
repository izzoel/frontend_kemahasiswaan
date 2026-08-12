"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "@idds/react";
import { IconArrowRight } from "@tabler/icons-react";

const illustrasiImage1 = "https://cloud.zetware.id/apps/files_sharing/publicpreview/kE7PWW75b6ndtYi?file=/&fileId=11551&x=2880&y=1800&a=true&etag=6f5ff26c7f812691411277a9625d2f9f";
const illustrasiImage2 = "https://cloud.zetware.id/apps/files_sharing/publicpreview/nnJTCfSpGMb9JBi?file=/&fileId=11552&x=2880&y=1800&a=true&etag=c0431d893aea6ab1f73e80b2dccaab62";
const illustrasiImage3 = "https://cloud.zetware.id/apps/files_sharing/publicpreview/qZcft8cXFf6ocXc?file=/&fileId=11553&x=2880&y=1800&a=true&etag=edf178a2a6acd8a02793f22233f835cb";
const illustrasiImage4 = "https://cloud.zetware.id/apps/files_sharing/publicpreview/YdBwix99sofTBdn?file=/&fileId=11554&x=2880&y=1800&a=true&etag=5430167a2198b20ab13676fbac011de9";

export default function Post() {
    return (
        <div className="flex-1 w-full p-container-padding p-2 pb-margin-lg bg-surface bg-blue-100">
            <div className="flex flex-col gap-4 lg:gap-6 p-4 w-full">
                <div className="flex flex-row gap-4 justify-between border-b border-neutral-300 ">
                    <div className="">
                        <h1 className="text-sm md:text-base lg:text-lg font-semibold ">
                            Postingan Kemahasiswaan
                        </h1>
                        <p className="text-xs pb-2">
                            Jelajahi berita terbaru, informasi terkini, dan wawasan menarik. Temukan informasi yang Anda
                            butuhkan disini.
                        </p>

                    </div>
                    <div>
                        <Button hierarchy="primary">Lihat Semua</Button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 text-xs">
                    {/* <div className="flex flex-col sm:flex-row gap-2 lg:flex-row gap-gutter text-xs">
                    <div className="w-full lg:w-[70%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter gap-5"> */}

                    <Card
                        className="card-zoom-hover cursor-pointer"
                        variant="basic"
                        mediaPosition="top"
                        title={
                            <h3 className="text-sm font-semibold line-clamp-2">
                                Pemenang Kompetisi Robotik Nasional 2024
                            </h3>
                        }
                        description={
                            <p className="text-xs">
                                Tim mahasiswa Fakultas Teknik berhasil meraih juara pertama dalam kompetisi
                                robotik tingkat nasional yang diselenggarakan di Jakarta.
                            </p>
                        }
                        mediaSrc={illustrasiImage1}
                        mediaAlt="Card media"
                        showButton={true}
                    />

                    <Card
                        className="card-zoom-hover cursor-pointer"
                        variant="basic"
                        mediaPosition="top"
                        title={
                            <h3 className="text-sm font-semibold line-clamp-2">
                                Seminar Karir Masa Depan di Era Digital
                            </h3>
                        }
                        description={
                            <p className="text-xs">
                                Pusat Karir Universitas mengadakan seminar dengan pembicara dari berbagai
                                perusahaan teknologi terkemuka untuk mempersiapkan lulusan.
                            </p>
                        }
                        mediaSrc={illustrasiImage2}
                        mediaAlt="Card media"
                        showButton={true}
                    />
                    <Card
                        className="card-zoom-hover cursor-pointer"
                        variant="basic"
                        mediaPosition="top"
                        title={
                            <h3 className="text-sm font-semibold line-clamp-2">
                                Kegiatan Bakti Sosial Mahasiswa di Desa Binaan
                            </h3>
                        }
                        description={
                            <p className="text-xs">
                                Ratusan mahasiswa dari berbagai fakultas bergabung dalam program pengabdian
                                masyarakat untuk membantu pembangunan fasilitas desa dan memberikan edukasi
                                kesehatan.
                            </p>
                        }
                        mediaSrc={illustrasiImage3}
                        mediaAlt="Card media"
                        showButton={true}
                    />
                    {/* <Card
                        className="card-zoom-hover cursor-pointer"
                        variant="basic"
                        mediaPosition="top"
                        title={
                            <h3 className="text-sm font-semibold line-clamp-2">
                                Mahasiswa UNBL Raih Juara 1 Kompetisi Inovasi Teknologi Nasional
                            </h3>
                        }
                        description={
                            <p className="text-xs">
                                Tim delegasi mahasiswa berhasil memenangkan penghargaan utama berkat inovasi aplikasi pelayanan masyarakat berbasis teknologi tepat guna.
                            </p>
                        }
                        mediaSrc={illustrasiImage4}
                        mediaAlt="Card media"
                        showButton={true}
                    /> */}
                    {/* </div>
                    </div> */}

                    {/* <div className="w-full lg:w-[30%]">
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
                    </div> */}

                </div>

            </div>
        </div >

    );
}
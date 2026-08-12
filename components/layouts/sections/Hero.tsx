"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@idds/react";
import { IconArrowRight } from "@tabler/icons-react";
const heroImage = "https://cloud.zetware.id/apps/files_sharing/publicpreview/YdQabbbpLk2kGiK?file=/&fileId=11550&x=2880&y=1800&a=true&etag=5e4fa903781865f71bbd4ee0b5fd98da";

export default function Header() {
    return (
        <div className="flex-1 w-full p-container-padding p-2 pb-margin-lg bg-surface bg-blue-100">
            {/* <div className="flex-1 w-full p-container-padding p-2 pb-margin-lg bg-surface bg-zinc-100"> */}
            <div className="flex flex-col gap-4 lg:gap-6 p-4 w-full">
                <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                    <img
                        alt="Featured News Image"
                        className="w-full max-h-150 object-cover transition-transform duration-700 group-hover:scale-105 rounded-xl"
                        src={heroImage}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent rounded-xl" />

                    <div className="absolute top-0 left-0 right-0 p-6 text-white flex flex-col gap-2">
                        <div className="space-y-3 lg:space-y-12">
                            <p className="bg-[#006508] font-bold px-3 py-1 rounded-full w-fit uppercase">
                                Direktorat
                            </p>
                            <h1 className="text-4xl lg:text-8xl font-semibold text-neutral-100 upper">
                                Kemahasiswaan <br /> dan Alumni
                            </h1>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col gap-2">
                        <p className="text-md text-neutral-200 line-clamp-3 mb-5">
                            Direktorat Kemahasiswaan dan Alumni merupakan unit kerja di lingkungan Universitas Borneo Lestari. <br />
                            Dalam pelaksanaan tugasnya, memberikan pelayanan terhadap mahasiswa aktif maupun calon alumni <br />
                            untuk mempersiapkan mereka sebagai lulusan yang siap kerja.
                        </p>

                        <div className="hidden sm:flex flex-row gap-4 items-center">

                            <Button hierarchy="tertiary" className="text-content-primary" suffixIcon={<IconArrowRight size={16} />}>
                                Jelajahi
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
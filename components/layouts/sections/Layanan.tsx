"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "@idds/react";
import { IconArrowRight } from "@tabler/icons-react";

const illustrasiImage1 = "https://cloud.zetware.id/apps/files_sharing/publicpreview/kE7PWW75b6ndtYi?file=/&fileId=11551&x=2880&y=1800&a=true&etag=6f5ff26c7f812691411277a9625d2f9f";
const illustrasiImage2 = "https://cloud.zetware.id/apps/files_sharing/publicpreview/nnJTCfSpGMb9JBi?file=/&fileId=11552&x=2880&y=1800&a=true&etag=c0431d893aea6ab1f73e80b2dccaab62";
const illustrasiImage3 = "https://cloud.zetware.id/apps/files_sharing/publicpreview/qZcft8cXFf6ocXc?file=/&fileId=11553&x=2880&y=1800&a=true&etag=edf178a2a6acd8a02793f22233f835cb";
const illustrasiImage4 = "https://cloud.zetware.id/apps/files_sharing/publicpreview/YdBwix99sofTBdn?file=/&fileId=11554&x=2880&y=1800&a=true&etag=5430167a2198b20ab13676fbac011de9";

// import avatarImage from '@/assets/components/avatar/avatar-example.svg?url';
// import contohMedia from '@/assets/components/card-content/contoh-media.jpg?url';

export default function Layanan() {
    return (
        <div className="flex-1 w-full p-container-padding p-2 pb-margin-lg bg-surface">
            {/* <div className="flex-1 w-full p-container-padding p-2 pb-margin-lg bg-surface bg-[#060b360d]"> */}
            <div className="flex flex-col gap-4 space-y-5 lg:gap-6 p-4 w-full">
                <div className="flex flex-row gap-4 justify-center">
                    <div className="">
                        <h1 className="text-sm md:text-base lg:text-3xl text-center font-semibold ">
                            Layanan Kami
                        </h1>

                    </div>
                </div>

                {/* <div className="flex flex-col justify-between items-center sm:flex-row gap-2 lg:gap-16px text-xs"> */}

                <div className="justify-center items-center sm:flex-row gap-2 lg:gap-15" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Card
                        variant="overlay"
                        mediaPosition="top"
                        title="Konseling"
                        description="Penanganan keluhan atau konsultasi oleh konselor yang ahli di bidangnya."
                        mediaSrc={illustrasiImage1}
                        mediaAlt="Card media"
                        showButton={true}
                        buttonText="Button CTA"
                        buttonHierarchy="primary"
                    />
                    <Card
                        variant="overlay"
                        mediaPosition="top"
                        title="Beasiswa"
                        description="Kesempatan meraih impian akademik tanpa khawatir tentang kendala finansial."
                        mediaSrc={illustrasiImage1}
                        mediaAlt="Card media"
                        showButton={true}
                        buttonText="Button CTA"
                        buttonHierarchy="primary"
                    />
                    <Card
                        variant="overlay"
                        mediaPosition="top"
                        title="Prestasi"
                        description="Penghargaan dalam bidang akademik, olahraga, seni, dan kegiatan lainnya."
                        mediaSrc={illustrasiImage1}
                        mediaAlt="Card media"
                        showButton={true}
                        buttonText="Button CTA"
                        buttonHierarchy="primary"
                    />
                </div>



                {/* </div> */}

            </div>
        </div >

    );
}
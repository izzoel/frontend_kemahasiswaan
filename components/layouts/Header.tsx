"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@idds/react";
import logo from "@/assets/pattern/header/kemahasiswaan.svg";

export default function Header() {
    return (
        <header className="flex flex-row gap-4 justify-between items-center border border-neutral-200 p-4 px-5 rounded-lg">
            <Link href="/">
                <Image
                    src={logo}
                    alt="Direktorat Kemahasiswaan"
                    className="h-8 w-auto"
                />
            </Link>

            <div className="hidden sm:flex flex-row gap-4 items-center">
                <Button hierarchy="tertiary" className="text-content-primary">
                    Beasiswa
                </Button>
                <Button hierarchy="tertiary" className="text-content-primary">
                    Prestasi
                </Button>
                <Button hierarchy="tertiary" className="text-content-primary">
                    Pedoman
                </Button>

                <Button className="bg-[#FF5733]! text-white! border-transparent! hover:bg-[#E04D2D]!" >
                    Tracer
                </Button>
            </div>
        </header>
    );
}
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <img src="https://placehold.co/100x100@2x.png" alt="logo" width={100} height={100} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
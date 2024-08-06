"use client";

import Link from "next/link";
import { useState } from "react";
import { X, AlignRight } from "lucide-react";
import { Button } from "@/components/Elements/Button";

const NavMenu = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`${isNavMenuOpen ? "absolute w-screen h-screen " : "hidden"} lg:block -z-40 top-0 left-0 right-0 bg-blue-800`}
      >
        <div className="container flex flex-col lg:flex-row justify-between gap-4 lg:items-center h-full lg:py-4  py-28 ">
          <nav className="flex flex-col font-bold lg:flex-row justify-center gap-4">
            <Link href="/">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#programs">Programs</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <Link href="/">
            <Button className="w-full self-end">Get Services</Button>
          </Link>
        </div>
      </div>
      <button
        className="lg:hidden"
        onClick={() => {
          setIsNavMenuOpen(!isNavMenuOpen);
        }}
      >
        {isNavMenuOpen ? <X size={32} /> : <AlignRight size={32} />}
      </button>
    </div>
  );
};

export { NavMenu }

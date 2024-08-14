"use client";

import { josefin } from "@/utils/font";
import clsx from "clsx";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useState } from "react";
import { Suspense } from "react";

const Links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 4,
    name: "Products",
    href: "/products",
  },
  {
    id: 5,
    name: "Partners",
    href: "/partners",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-auto px-4 py-4 md:px-12 md:py-6 flex items-center">
      <nav className="w-full flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Suspense
              fallback={
                <div className="rounded-md bg-gray-200 w-full h-full">
                  {" "}
                  Loading Image
                </div>
              }
            >
              <CldImage
                src="Logos/lsgf9lciieblf3jemxy5"
                alt="Buildbot Logo"
                width={100}
                height={76.5999999999998}
              />
            </Suspense>
            <span className={`${josefin.className} font-bold text-3xl`}>
              BUILDBOT
            </span>
          </Link>
        </div>
        <div className="space-x-4 hidden xl:flex">
          {/* Desktop Menu */}
          {Links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={clsx(
                "text-xl font-medium text-gray-500 hover:text-gray-800 hover:underline ease-in-out duration-100",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

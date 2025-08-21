"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathanme = usePathname();
  const headers = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className=" text-white p-4  ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav>
          <ul className="flex space-x-4">
            {headers.map((header) => (
              <li key={header.title}>
                <Link
                  href={header.link}
                  className={
                    pathanme == header.link
                      ? " text-cyan-900 "
                      : " hover:underline"
                  }
                >
                  {header.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

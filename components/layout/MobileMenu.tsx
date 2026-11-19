"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Blog", href: "/blog" },
  { name: "Poetry", href: "/poetry" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="p-2"
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-[#e9e2d7] bg-[#f8f6f1] px-6 py-5 shadow-lg">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#e9e2d7] py-4 text-sm font-semibold hover:text-[#b58a4b]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Poetry", href: "/poetry" },
  { name: "Blog", href: "/blog" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#74243a]/10 bg-[#f8f6f1]/95 shadow-[0_4px_25px_rgba(53,35,42,0.06)] backdrop-blur-xl">

      {/* Main Navbar */}
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-14">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 flex-col"
        >
          <span className="font-serif text-3xl font-bold tracking-wide text-[#35232a] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#74243a] sm:text-4xl">
            Author
            <span className="text-[#c5a16a] transition-colors duration-300 group-hover:text-[#74243a]">
              .
            </span>
          </span>

          <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.32em] text-[#77736c] transition-all duration-500 group-hover:tracking-[0.4em] group-hover:text-[#74243a] sm:text-[10px]">
            Writer & Storyteller
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative py-4 text-[14px] font-semibold tracking-wide text-[#45413a] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#74243a] xl:text-[15px]"
            >
              {link.name}

              {/* Animated Underline */}
              <span className="absolute bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#c5a16a] transition-transform duration-500 ease-out group-hover:scale-x-100" />

              {/* Small Gold Dot */}
              <span className="absolute -bottom-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 scale-0 rounded-full bg-[#74243a] transition-transform duration-300 delay-100 group-hover:scale-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          className="group relative hidden items-center gap-3 overflow-hidden rounded-full border border-[#74243a]/20 bg-white px-6 py-3.5 text-sm font-semibold tracking-wide text-[#35232a] shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-[#c5a16a] hover:shadow-lg xl:flex xl:px-7"
        >
          <span className="absolute inset-0 -translate-x-full bg-[#c5a16a] transition-transform duration-500 group-hover:translate-x-0" />

          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#35232a]">
            Get In Touch
          </span>

          <ArrowUpRight
            size={18}
            className="relative z-10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#c5a16a]/50 bg-white text-[#35232a] shadow-sm transition-all duration-300 hover:rotate-3 hover:border-[#74243a] hover:bg-[#74243a] hover:text-white active:scale-90 lg:hidden"
        >
          <span
            className={`absolute transition-all duration-300 ${
              menuOpen
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <Menu size={23} />
          </span>

          <span
            className={`absolute transition-all duration-300 ${
              menuOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            }`}
          >
            <X size={23} />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`grid overflow-hidden bg-[#f8f6f1] transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] border-t border-[#c5a16a]/30 opacity-100"
            : "grid-rows-[0fr] border-t-0 opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="mx-auto flex max-w-2xl flex-col px-6 py-3 sm:px-10">

            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
                }}
                className={`group flex items-center justify-between border-b border-[#35232a]/10 py-4 text-base font-semibold tracking-wide text-[#35232a] transition-all duration-300 hover:translate-x-2 hover:text-[#74243a] sm:text-lg ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                }`}
              >
                <span className="relative">
                  {link.name}

                  <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#c5a16a] transition-transform duration-300 group-hover:scale-x-100" />
                </span>

                <ChevronDown
                  size={19}
                  className="-rotate-90 text-[#c5a16a] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#74243a]"
                />
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="group mt-6 flex items-center justify-center gap-3 rounded-full border border-[#74243a]/20 bg-white px-6 py-4 text-sm font-semibold text-[#35232a] shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a16a] hover:bg-[#c5a16a] hover:shadow-lg active:scale-95"
            >
              Get In Touch

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}

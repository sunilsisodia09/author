
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  ArrowUp,
  BookOpen,
  Feather,
} from "lucide-react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Poetry", href: "/poetry" },
  { name: "Blog", href: "/blog" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/" },
  { name: "Facebook", href: "https://facebook.com/" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#35232a] text-[#f5eee5]">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c5a16a]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#74243a]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Quote Section */}
        <div className="border-b border-white/10 py-16 text-center md:py-20">

          <Feather
            className="mx-auto mb-5 text-[#c5a16a]"
            size={30}
          />

          <p className="mx-auto max-w-3xl font-serif text-2xl leading-relaxed text-[#f5eee5] transition-all duration-700 hover:text-[#c5a16a] md:text-4xl">
            "Words have the power to touch hearts, inspire minds and create everlasting memories."
          </p>

          <div className="mx-auto mt-7 h-[2px] w-16 bg-[#c5a16a]" />

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#c5a16a]">
            A Writer's Journey
          </p>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c5a16a]/50 bg-[#c5a16a]/10 transition-all duration-500 group-hover:rotate-12 group-hover:bg-[#c5a16a]">
                <BookOpen
                  size={23}
                  className="text-[#c5a16a] transition-colors group-hover:text-[#35232a]"
                />
              </div>

              <span className="font-serif text-2xl font-semibold tracking-wide">
                Author<span className="text-[#c5a16a]">.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#d0c3bb]">
              Exploring emotions, sharing stories and connecting hearts
              through the beautiful power of words.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs text-[#f5eee5] transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a16a] hover:bg-[#c5a16a] hover:text-[#35232a]"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="mb-7 font-serif text-xl text-[#c5a16a]">
              Explore
            </h3>

            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[#d0c3bb] transition-all duration-300 hover:translate-x-2 hover:text-[#c5a16a]"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-7 font-serif text-xl text-[#c5a16a]">
              Get In Touch
            </h3>

            <p className="mb-5 text-sm leading-7 text-[#d0c3bb]">
              Have a question, collaboration idea or simply want to connect?
              I would love to hear from you.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-[#c5a16a] px-5 py-3 text-sm text-[#c5a16a] transition-all duration-300 hover:bg-[#c5a16a] hover:text-[#35232a]"
            >
              <Mail size={17} />

              Contact Me

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Featured Books */}
          <div>
            <h3 className="mb-7 font-serif text-xl text-[#c5a16a]">
              Keep Reading
            </h3>

            <p className="mb-5 text-sm leading-7 text-[#d0c3bb]">
              Discover books, poetry and thoughts that bring inspiration
              to everyday life.
            </p>

            <Link
              href="/books"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#c5a16a]"
            >
              Discover My Books

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs tracking-wide text-[#b9aaa1]">
            © 2026 Author. All Rights Reserved.
          </p>

          <p className="font-serif text-sm italic text-[#c5a16a]">
            Written with passion, shared with love.
          </p>

          <Link
            href="/"
            aria-label="Back to home"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a16a]/50 text-[#c5a16a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c5a16a] hover:text-[#35232a]"
          >
            <ArrowUp
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </div>
    </footer>
  );
}

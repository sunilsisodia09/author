
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Feather,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f5ef]">
      {/* Background */}
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-80 w-80 rounded-full bg-[#b58a4b]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-72 w-72 rounded-full bg-[#74243a]/10 blur-[100px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:min-h-[650px] lg:grid-cols-2 lg:gap-12 lg:px-10">

        {/* Left Content */}
        <div className="relative z-10 text-center lg:text-left">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b58a4b]/30 bg-white/70 px-4 py-2">
            <Sparkles size={13} className="text-[#b58a4b]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8c6838] sm:text-xs">
              Author · Writer · Storyteller
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-[#35232a] sm:text-5xl md:text-6xl lg:text-[64px]">
            Words That
            <br />
            <span className="italic text-[#9a5261]">Touch Hearts.</span>
            <br />
            Stories That
            <br />
            <span className="text-[#b58a4b]">Inspire Minds.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#74676a] sm:text-base lg:mx-0">
            Welcome to my creative world — where imagination meets emotions,
            stories find their voice, and every word creates a meaningful
            connection.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/books"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#74243a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#74243a]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#55202f] sm:w-auto"
            >
              <BookOpen size={17} />
              Explore My Books
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="/about"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#74243a]/25 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#35232a] transition-all duration-300 hover:-translate-y-1 hover:border-[#b58a4b] sm:w-auto"
            >
              Discover My Story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-6 border-t border-[#35232a]/10 pt-6 lg:justify-start">
            <div className="flex items-center gap-2.5">
              <Feather size={20} className="text-[#b58a4b]" />
              <div className="text-left">
                <p className="font-serif text-base font-bold text-[#35232a]">Poetry</p>
                <p className="text-[10px] text-[#8b7d7c]">Words & Emotions</p>
              </div>
            </div>

            <div className="h-8 w-px bg-[#35232a]/15" />

            <div className="flex items-center gap-2.5">
              <BookOpen size={20} className="text-[#b58a4b]" />
              <div className="text-left">
                <p className="font-serif text-base font-bold text-[#35232a]">Books</p>
                <p className="text-[10px] text-[#8b7d7c]">Stories & Ideas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[400px]">

          <div className="absolute -right-4 top-4 h-24 w-24 rounded-full border border-[#b58a4b]/40 sm:-right-7 sm:h-28 sm:w-28" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border border-[#74243a]/20 sm:-bottom-6 sm:-left-6 sm:h-32 sm:w-32" />

          {/* Main Visual */}
          <div className="relative aspect-[4/4.5] overflow-hidden rounded-t-[48%] rounded-b-3xl border-[7px] border-white bg-gradient-to-br from-[#74243a] via-[#512b36] to-[#25231f] shadow-2xl shadow-[#35232a]/20 sm:border-[9px]">

            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a36c]/50 bg-white/5">
                <Feather size={34} className="text-[#c9a36c]" />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c9a36c]">
                The Art of
              </span>

              <h2 className="mt-3 font-serif text-4xl font-bold italic text-white sm:text-5xl">
                Writing
              </h2>

              <div className="mx-auto mt-5 h-px w-16 bg-[#c9a36c]" />

              <p className="mt-5 max-w-[220px] font-serif text-base italic leading-7 text-white/75">
                "Every word carries a story. Every story carries a soul."
              </p>

              <Sparkles size={19} className="mt-6 text-[#c9a36c]" />
            </div>

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full border border-[#c9a36c]/20" />
          </div>

          {/* Floating Badge */}
          <div className="absolute -left-3 top-1/4 flex items-center gap-2 rounded-xl border border-white/70 bg-white/95 px-3 py-2.5 shadow-xl sm:-left-7">
            <Feather size={18} className="text-[#74243a]" />
            <div>
              <p className="text-xs font-bold text-[#35232a]">Creative Writing</p>
              <p className="text-[9px] text-[#8b7d7c]">Inspired by Life</p>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="absolute -bottom-4 right-1 flex items-center gap-2 rounded-full border border-[#b58a4b]/20 bg-white px-4 py-2.5 shadow-xl sm:-right-4">
            <Sparkles size={14} className="text-[#b58a4b]" />
            <span className="text-[10px] font-semibold text-[#35232a]">
              Stories Worth Sharing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

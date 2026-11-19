
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Feather,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f6f1] py-20 md:py-28 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#c5a16a]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#74243a]/5 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">

        {/* LEFT IMAGE SECTION */}
        <div
          className={`relative mx-auto w-full max-w-[480px] transition-all duration-1000 ease-out lg:mx-0 ${
            visible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "-translate-x-12 translate-y-8 opacity-0"
          }`}
        >
          {/* Main Image Container */}
          <div className="group relative z-10 overflow-hidden rounded-sm bg-[#e9e2d5] shadow-[0_25px_60px_rgba(53,35,42,0.12)]">

            <div className="relative flex aspect-[4/5] min-h-[380px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0e9dc] via-[#e9dfcf] to-[#d9c6aa]">

              {/* Decorative Circles */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#b58a4b]/30 transition-transform duration-1000 group-hover:scale-125" />

              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#b58a4b]/30 transition-transform duration-1000 group-hover:scale-125" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-[#74243a]/10" />

              {/* Center Content */}
              <div className="relative z-10 flex flex-col items-center text-center transition-transform duration-700 group-hover:-translate-y-2">

                <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#b58a4b]/50 bg-white/30 shadow-lg backdrop-blur-sm transition-all duration-700 group-hover:rotate-12 group-hover:border-[#74243a]">
                  <span className="font-serif text-6xl italic text-[#74243a]">
                    A.
                  </span>
                </div>

                <Feather
                  size={30}
                  strokeWidth={1}
                  className="mb-5 text-[#b58a4b]"
                />

                <h3 className="font-serif text-3xl tracking-wide text-[#35232a] sm:text-4xl">
                  Writer & Storyteller
                </h3>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8c7151]">
                  Creating Stories • Inspiring Hearts
                </p>

                <div className="mt-7 h-[2px] w-16 bg-[#b58a4b] transition-all duration-500 group-hover:w-32" />
              </div>

              {/* Bottom Decorative Label */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[#b58a4b]/20 bg-white/30 px-5 py-4 backdrop-blur-sm">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#665448]">
                  The Art of Words
                </span>

                <Sparkles size={17} className="text-[#b58a4b]" />
              </div>
            </div>
          </div>

          {/* Outer Frame */}
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-sm border border-[#b58a4b]/50 transition-all duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />

          {/* Floating Book Badge */}
          <div
            className={`absolute -left-4 top-12 z-20 flex items-center gap-3 rounded-sm border border-[#c5a16a]/30 bg-white px-4 py-3 shadow-xl transition-all duration-1000 delay-500 sm:-left-8 ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#74243a]/10">
              <BookOpen size={20} className="text-[#74243a]" />
            </div>

            <div>
              <p className="font-serif text-sm font-bold text-[#35232a]">
                Stories
              </p>
              <p className="text-[10px] uppercase tracking-wider text-[#888078]">
                Written with passion
              </p>
            </div>
          </div>

          {/* Bottom Quote Badge */}
          <div
            className={`absolute -bottom-8 -right-2 z-20 max-w-[220px] rounded-sm bg-[#74243a] p-5 shadow-xl transition-all duration-1000 delay-700 sm:-right-8 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="font-serif text-lg italic leading-relaxed text-white">
              "Every word has a story to tell."
            </p>

            <div className="mt-3 h-[2px] w-10 bg-[#c5a16a]" />
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div
          className={`relative z-10 pt-8 transition-all duration-1000 delay-200 ease-out lg:pt-0 ${
            visible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-12 translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#c5a16a]" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8c6740]">
              Discover My Story
            </p>
          </div>

          {/* Heading */}
          <h2 className="max-w-xl font-serif text-4xl font-medium leading-[1.2] text-[#35232a] sm:text-5xl lg:text-[58px]">
            Words That
            <span className="block italic text-[#74243a]">
              Connect Hearts
            </span>
            and Inspire Minds
          </h2>

          {/* Animated Underline */}
          <div
            className={`mt-7 h-[3px] rounded-full bg-[#c5a16a] transition-all duration-1000 delay-500 ${
              visible ? "w-24" : "w-0"
            }`}
          />

          {/* Description */}
          <p className="mt-8 text-[15px] leading-8 text-[#77736c] sm:text-base">
            Every story begins with an idea, a feeling, or a moment worth
            remembering. Writing is my way of exploring those moments and
            sharing them with the world.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-[#77736c] sm:text-base">
            Through books, poetry, and thoughtful writing, I aim to create
            meaningful experiences that stay with readers long after the
            final page.
          </p>

          {/* Highlights */}
          <div className="mt-9 grid grid-cols-2 gap-4 border-y border-[#35232a]/10 py-6">

            <div className="group">
              <div className="flex items-center gap-2">
                <BookOpen
                  size={19}
                  className="text-[#b58a4b] transition-transform duration-300 group-hover:-translate-y-1"
                />

                <span className="font-serif text-lg font-semibold text-[#35232a]">
                  Books
                </span>
              </div>

              <p className="mt-2 text-xs leading-6 text-[#888078]">
                Stories that leave a lasting impression.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-2">
                <Feather
                  size={19}
                  className="text-[#b58a4b] transition-transform duration-300 group-hover:-translate-y-1"
                />

                <span className="font-serif text-lg font-semibold text-[#35232a]">
                  Poetry
                </span>
              </div>

              <p className="mt-2 text-xs leading-6 text-[#888078]">
                Emotions expressed through words.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/about"
              className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#74243a] px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-[#35232a] hover:shadow-[0_15px_30px_rgba(116,36,58,0.2)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#c5a16a] transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10 transition-colors group-hover:text-[#35232a]">
                Read My Story
              </span>

              <ArrowUpRight
                size={18}
                className="relative z-10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#35232a]"
              />
            </Link>

            <span className="font-serif text-sm italic text-[#8c7151]">
              A journey through words...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

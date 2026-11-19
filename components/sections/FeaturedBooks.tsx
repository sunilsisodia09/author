
import { books } from "@/data/books";
import BookCard from "@/components/ui/BookCard";
import ScrollReveal from "@/components/ScrollReveal";
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Feather,
  Quote,
} from "lucide-react";
import Link from "next/link";

export default function BooksShowcase() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f5ef] px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:py-28">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#b58a4b]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#74243a]/[0.08] blur-[110px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <ScrollReveal direction="up">
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">

            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#c5a16a]/40 bg-white px-5 py-2.5 shadow-sm">
              <Sparkles size={15} className="text-[#b58a4b]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8c6838] sm:text-xs">
                The Literary Collection
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-[#35232a] sm:text-5xl md:text-6xl lg:text-7xl">
              A World of Stories,
              <span className="mt-2 block italic text-[#8e4659]">
                Waiting to Be Discovered.
              </span>
            </h2>

            <div className="mx-auto mt-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#b58a4b]/60" />
              <Feather size={21} className="text-[#b58a4b]" />
              <span className="h-px w-12 bg-[#b58a4b]/60" />
            </div>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#74676a] sm:text-base md:text-lg">
              Every book carries a different emotion, every page opens
              a new possibility. Discover a collection of meaningful
              stories, poetry, and thoughts created to inspire and connect.
            </p>
          </div>
        </ScrollReveal>

        {/* Collection Intro */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mb-9 flex flex-col items-center justify-between gap-4 border-b border-[#b58a4b]/25 pb-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#74243a]/[0.07] text-[#74243a]">
                <BookOpen size={21} />
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-[#35232a]">
                  Featured Publications
                </h3>
                <p className="mt-1 text-xs text-[#95877d]">
                  A collection of thoughts and imagination
                </p>
              </div>
            </div>

            <span className="rounded-full border border-[#c5a16a]/30 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-[#8c6838]">
              {books.length} {books.length === 1 ? "Publication" : "Publications"}
            </span>
          </div>
        </ScrollReveal>

        {/* Books Grid */}
        {books.length > 0 ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-9">
            {books.map((book, index) => (
              <ScrollReveal
                key={book.id}
                delay={index * 120}
                direction="up"
                className="group mx-auto h-full w-full max-w-[320px] min-w-0"
              >
                <div className="relative h-full rounded-2xl transition-all duration-500 md:group-hover:-translate-y-3">

                  {/* Hover Border */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#c5a16a]/60 via-[#e9dfd4] to-[#74243a]/40 opacity-0 blur-[1px] transition-opacity duration-500 md:group-hover:opacity-100" />

                  <div className="relative h-full overflow-hidden rounded-2xl border border-[#e9dfd4] bg-white shadow-[0_8px_30px_rgba(53,35,42,0.05)] transition-all duration-500 md:group-hover:shadow-[0_22px_50px_rgba(53,35,42,0.13)]">
                    <div className="h-full [perspective:1200px]">
                      <div className="h-full transform-gpu transition-transform duration-700 ease-out motion-safe:md:group-hover:[transform:rotateY(-2deg)_rotateX(1deg)_scale(1.01)]">
                        <BookCard book={book} />
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#74243a] to-[#c5a16a] transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-3xl border border-[#e9dfd4] bg-white px-6 py-16 text-center shadow-sm sm:py-20">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#74243a]/[0.07] text-[#74243a]">
              <BookOpen size={35} strokeWidth={1.4} />
            </div>

            <h3 className="mt-7 font-serif text-3xl font-semibold text-[#35232a]">
              Something Beautiful Is Coming
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#74676a] sm:text-base">
              New stories are taking shape. Stay connected for upcoming
              books, poetry, and publications.
            </p>

            <div className="mx-auto mt-7 h-px w-16 bg-[#c5a16a]" />
          </div>
        )}

        {/* Literary Quote */}
        <ScrollReveal direction="up">
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-[#e9dfd4] bg-white px-6 py-10 text-center shadow-[0_8px_30px_rgba(53,35,42,0.04)] sm:px-12 sm:py-14">

            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c5a16a]/10 blur-3xl" />

            <Quote
              size={30}
              className="mx-auto mb-5 text-[#b58a4b]"
              strokeWidth={1.4}
            />

            <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-relaxed text-[#35232a] sm:text-3xl">
              "A book is not just a collection of pages; it is a journey
              that lives in the heart of every reader."
            </p>

            <div className="mx-auto my-6 h-px w-14 bg-[#c5a16a]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9a5261]">
              The Beauty of Literature
            </p>
          </div>
        </ScrollReveal>

        {/* Explore More */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/books"
            className="group inline-flex items-center gap-3 rounded-full bg-[#74243a] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#74243a]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#54202f] hover:shadow-xl"
          >
            Explore All Books
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}


import type { Metadata } from "next";
import {
  Feather,
  Heart,
  Sparkles,
  BookOpen,
  Quote,
  ArrowDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Poetry | Author Portfolio",
  description: "Explore poems and creative writing.",
};

const poems = [
  {
    number: "01",
    title: "The Language of Silence",
    subtitle: "The beauty of unspoken emotions",
    text: `Some words are never spoken,
Some feelings never shown,
Yet silence tells the stories
That only hearts have known.`,
  },
  {
    number: "02",
    title: "A New Beginning",
    subtitle: "A reminder that every day is a new chance",
    text: `Every sunrise brings a chance,
Every moment, a new dance.
Leave the past and let it be,
A world of dreams is yours to see.`,
  },
  {
    number: "03",
    title: "The Written Heart",
    subtitle: "When words become feelings",
    text: `I write the things I cannot say,
In lines that quietly find their way.
Each little word, each memory,
Becomes a part of poetry.`,
  },
];

export default function PoetryPage() {
  return (
    <main className="overflow-hidden bg-[#f8f5ef]">
      {/* Hero Section */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-[#b58a4b]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#74243a]/10 blur-3xl" />

        <div className="container-main relative mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b58a4b]/30 bg-white/70 px-5 py-2">
            <Feather size={15} className="text-[#b58a4b]" />
            <span className="text-[10px] font-semibold tracking-[3px] text-[#74243a]">
              WORDS FROM THE HEART
            </span>
          </div>

          <h1 className="font-serif text-4xl leading-tight text-[#35232a] sm:text-5xl md:text-6xl lg:text-7xl">
            Poetry &{" "}
            <span className="italic text-[#8b354e]">Expressions</span>
          </h1>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b58a4b]/60" />
            <Feather size={19} className="text-[#b58a4b]" />
            <span className="h-px w-12 bg-[#b58a4b]/60" />
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#77736c] sm:text-base">
            Some emotions are too deep for ordinary words. Discover a collection
            of verses inspired by life, love, memories and the beautiful moments
            that make us human.
          </p>

          <a
            href="#poems"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#74243a] px-7 py-3.5 text-xs font-semibold tracking-[1.5px] text-white shadow-lg shadow-[#74243a]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#54202f]"
          >
            EXPLORE POEMS
            <ArrowDown size={15} />
          </a>

          <div className="mt-14 flex items-center justify-center gap-8 text-[#9b9288]">
            <div className="text-center">
              <p className="font-serif text-3xl text-[#74243a]">03</p>
              <p className="mt-1 text-[9px] tracking-[2px]">POEMS</p>
            </div>
            <div className="h-10 w-px bg-[#ded5c8]" />
            <div className="text-center">
              <Heart size={22} className="mx-auto text-[#b58a4b]" />
              <p className="mt-2 text-[9px] tracking-[2px]">EMOTIONS</p>
            </div>
            <div className="h-10 w-px bg-[#ded5c8]" />
            <div className="text-center">
              <BookOpen size={22} className="mx-auto text-[#b58a4b]" />
              <p className="mt-2 text-[9px] tracking-[2px]">EXPRESSIONS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Poems Section */}
      <section
        id="poems"
        className="relative bg-white/60 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="container-main relative mx-auto max-w-6xl">
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-3 text-[10px] font-semibold tracking-[3px] text-[#b58a4b]">
              THE POETRY COLLECTION
            </p>
            <h2 className="font-serif text-3xl text-[#35232a] sm:text-4xl md:text-5xl">
              Verses That Speak to the <span className="italic text-[#8b354e]">Soul</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#77736c]">
              Every poem carries a feeling, a thought, or a moment worth
              remembering.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem, index) => (
              <article
                key={poem.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8dfd3] bg-[#fdfbf7] p-7 shadow-[0_8px_30px_rgba(53,35,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#b58a4b]/60 hover:shadow-[0_20px_45px_rgba(53,35,42,0.10)] sm:p-8"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#b58a4b]/[0.07] transition-all duration-500 group-hover:h-36 group-hover:w-36" />

                <div className="relative flex items-center justify-between">
                  <span className="font-serif text-sm tracking-[2px] text-[#b58a4b]">
                    POEM {poem.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8dfd3] bg-white text-[#8b354e] transition-all duration-300 group-hover:border-[#74243a] group-hover:bg-[#74243a] group-hover:text-white">
                    <Feather size={17} />
                  </div>
                </div>

                <div className="relative mt-9">
                  <Quote size={30} className="mb-4 text-[#b58a4b]/70" />
                  <h3 className="font-serif text-2xl leading-snug text-[#35232a] transition-colors duration-300 group-hover:text-[#8b354e]">
                    {poem.title}
                  </h3>
                  <p className="mt-2 text-xs italic text-[#a18d79]">
                    {poem.subtitle}
                  </p>
                </div>

                <div className="my-7 h-px w-full bg-gradient-to-r from-[#b58a4b]/60 via-[#e8dfd3] to-transparent" />

                <p className="relative flex-1 whitespace-pre-line font-serif text-base leading-9 text-[#6f625d]">
                  {poem.text}
                </p>

                <div className="mt-9 flex items-center justify-between border-t border-[#e8dfd3] pt-5">
                  <p className="text-[9px] font-semibold tracking-[2px] text-[#b58a4b]">
                    A POEM BY THE AUTHOR
                  </p>
                  <Sparkles
                    size={16}
                    className="text-[#b58a4b] transition-transform duration-500 group-hover:rotate-12"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="relative overflow-hidden bg-[#35232a] px-5 py-20 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#b58a4b]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#8b354e]/30 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <Quote size={38} className="mx-auto mb-6 text-[#c5a16a]" />

          <h2 className="font-serif text-2xl leading-relaxed text-white sm:text-3xl md:text-4xl">
            "Poetry is where the heart finds its voice and the soul finds its
            words."
          </h2>

          <div className="mx-auto mt-8 h-px w-16 bg-[#c5a16a]" />

          <p className="mt-5 text-[10px] font-semibold tracking-[3px] text-[#c5a16a]">
            WORDS THAT LIVE FOREVER
          </p>
        </div>
      </section>
    </main>
  );
}

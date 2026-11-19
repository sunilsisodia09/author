
import type { Metadata } from "next";
import Link from "next/link";
import {
  Quote,
  Star,
  Heart,
  BookOpen,
  Feather,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials | Reader Reviews",
  description:
    "Discover what readers have to say about the books, poetry, and writing.",
};

const testimonials = [
  {
    name: "A Reader",
    role: "Book Enthusiast",
    category: "Reading Experience",
    message:
      "The writing feels personal and thoughtful. Every page leaves you with something to reflect on. It is truly a beautiful reading experience.",
  },
  {
    name: "A Literature Lover",
    role: "Regular Reader",
    category: "Literature",
    message:
      "A beautiful collection of ideas and emotions. The stories stay with you long after you finish reading. Looking forward to reading more.",
  },
  {
    name: "A Poetry Reader",
    role: "Poetry Enthusiast",
    category: "Poetry",
    message:
      "The poems express emotions in such a simple yet powerful way. Every line feels meaningful and connects with the heart.",
  },

 
];

export default function TestimonialsPage() {
  return (
    <main className="overflow-hidden bg-[#f8f5ef]">
      {/* Hero */}
      <section className="relative px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#74243a]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#c5a16a]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c5a16a]/40 bg-white px-5 py-2 text-sm font-semibold text-[#74243a] shadow-sm">
            <Heart size={15} />
            Words from the Heart
          </div>

          <h1 className="font-serif text-5xl font-semibold leading-tight text-[#35232a] sm:text-6xl lg:text-7xl">
            What Readers
            <span className="block italic text-[#74243a]">
              Say About My Work.
            </span>
          </h1>

          <div className="mx-auto my-7 h-[2px] w-20 bg-[#c5a16a]" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#756b68] sm:text-lg">
            Every story begins with words, but its true meaning comes alive
            through the people who read them. Here are some thoughts and
            reflections from readers.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#a27b46]">
                Reader Experiences
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#35232a] sm:text-4xl">
                Kind Words & Reflections
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#756b68]">
              <Sparkles size={17} className="text-[#b58a4b]" />
              Stories That Connect Us
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <article
                key={item.name + index}
                className="group relative flex flex-col rounded-2xl border border-[#e9dfd4] bg-white p-7 shadow-[0_8px_30px_rgba(53,35,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5a16a]/60 hover:shadow-[0_20px_45px_rgba(53,35,42,0.10)] sm:p-8"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#74243a]/[0.07] text-[#74243a] transition-all duration-300 group-hover:bg-[#74243a] group-hover:text-white">
                    <Quote size={23} />
                  </div>

                  <span className="font-serif text-5xl text-[#c5a16a]/30">
                    “
                  </span>
                </div>

                <div className="mb-5 flex gap-1 text-[#c5a16a]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                <p className="mb-8 flex-1 text-[15px] leading-8 text-[#756b68]">
                  “{item.message}”
                </p>

                <div className="border-t border-[#eee7df] pt-5">
                  <span className="mb-2 inline-block rounded-full bg-[#f8f5ef] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#74243a]">
                    {item.category}
                  </span>

                  <h3 className="font-serif text-lg font-semibold text-[#35232a]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#95877d]">
                    {item.role}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-[#74243a] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#35232a] px-7 py-16 text-center sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-[#c5a16a]/20" />

          <div className="relative">
            <Feather className="mx-auto mb-7 text-[#c5a16a]" size={34} />

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#c5a16a]">
              A Thought to Remember
            </p>

            <h2 className="mx-auto max-w-3xl font-serif text-3xl italic leading-relaxed text-white sm:text-4xl lg:text-5xl">
              “The beauty of writing is not just in the words we create,
              but in the hearts we touch.”
            </h2>

            <div className="mx-auto my-7 h-px w-16 bg-[#c5a16a]" />

            <p className="text-sm tracking-widest text-white/60">
              WITH GRATITUDE, ALWAYS
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#e9dfd4] bg-white px-5 py-16 text-center sm:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#74243a]/[0.07] text-[#74243a]">
            <BookOpen size={25} />
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#35232a] sm:text-4xl">
            Have You Read My Work?
          </h2>

          <p className="mt-4 leading-7 text-[#756b68]">
            Explore my books and poetry, and become a part of this literary
            journey.
          </p>

          <Link
            href="/books"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#74243a] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#54202f]"
          >
            Explore My Books
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

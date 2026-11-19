
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Feather,
  Newspaper,
  BookOpen,
  Mic2,
  Sparkles,
} from "lucide-react";

const newsItems = [
  {
    id: 1,
    category: "Book Updates",
    date: "November 2026",
    title: "A New Chapter in My Literary Journey",
    description:
      "Discover the latest updates, upcoming publications, and new milestones from my world of writing.",
    icon: BookOpen,
    number: "01",
  },
  {
    id: 2,
    category: "Literary Events",
    date: "October 2026",
    title: "Celebrating the Power of Words",
    description:
      "A glimpse into literary gatherings, meaningful conversations, and moments shared with readers.",
    icon: Mic2,
    number: "02",
  },
  {
    id: 3,
    category: "Author's Journal",
    date: "September 2026",
    title: "Thoughts, Stories and Inspiration",
    description:
      "Explore personal reflections, creative thoughts, and the inspiration behind my writing.",
    icon: Feather,
    number: "03",
  },
];

export default function NewsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#74243a]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#c5a16a]/10 blur-3xl" />

      <div className="container-main relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c5a16a]/40 bg-white px-5 py-2 text-sm font-semibold tracking-wide text-[#74243a] shadow-sm">
            <Sparkles size={15} />
            News & Updates
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#35232a] sm:text-5xl lg:text-6xl">
            Stories Beyond
            <span className="block italic text-[#74243a]">
              The Pages.
            </span>
          </h2>

          <div className="mx-auto my-6 h-[2px] w-20 bg-[#c5a16a]" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#756b68] sm:text-lg">
            Explore the latest news, literary updates, upcoming events,
            and special moments from my journey as an author.
          </p>
        </div>

        {/* News cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-[#e9dfd4] bg-white p-7 shadow-[0_8px_30px_rgba(53,35,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5a16a]/60 hover:shadow-[0_20px_45px_rgba(53,35,42,0.10)] sm:p-8"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 font-serif text-6xl font-bold text-[#74243a]/[0.06] transition-colors duration-500 group-hover:text-[#74243a]/[0.12]">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#74243a]/[0.07] text-[#74243a] transition-all duration-500 group-hover:bg-[#74243a] group-hover:text-white group-hover:rotate-3">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Category and date */}
                <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                  <span className="rounded-full bg-[#f8f5ef] px-3 py-2 text-[#74243a]">
                    {item.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-[#95877d]">
                    <CalendarDays size={13} />
                    {item.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-4 font-serif text-2xl font-semibold leading-snug text-[#35232a] transition-colors duration-300 group-hover:text-[#74243a]">
                  {item.title}
                </h3>

                <p className="mb-8 flex-1 text-sm leading-7 text-[#756b68]">
                  {item.description}
                </p>

                {/* Link */}
             

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#74243a] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

      

      </div>
    </section>
  );
}

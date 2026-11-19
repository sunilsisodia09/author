
import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  Feather,
  Sparkles,
  Clock,
  CalendarCheck,
} from "lucide-react";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events & Appearances | Author Portfolio",
  description:
    "Explore upcoming author events, literary gatherings, book discussions and special appearances.",
};

export default function EventsPage() {
  return (
    <main className="overflow-hidden bg-[#f8f5ef]">

      {/* HERO SECTION */}
      <section className="relative px-5 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#74243a]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#c5a16a]/[0.13] blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c5a16a]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6840] shadow-sm">
            <Sparkles size={14} />
            Meet & Connect
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-[#35232a] sm:text-5xl md:text-6xl lg:text-7xl">
            Events &{" "}
            <span className="italic text-[#74243a]">
              Appearances.
            </span>
          </h1>

          <div className="my-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#c5a16a]" />
            <Feather size={22} className="text-[#b58a4b]" />
            <span className="h-px w-12 bg-[#c5a16a]" />
          </div>

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#78696d] sm:text-lg">
            Discover upcoming literary gatherings, book discussions,
            launches and special opportunities to connect, share ideas
            and celebrate the power of words.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-[#806e70]">
            <span className="flex items-center gap-2 rounded-full border border-[#74243a]/10 bg-white/60 px-4 py-2">
              <BookOpenIcon />
              Literary Gatherings
            </span>
            <span className="flex items-center gap-2 rounded-full border border-[#74243a]/10 bg-white/60 px-4 py-2">
              <CalendarCheck size={15} className="text-[#b58a4b]" />
              Special Appearances
            </span>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="relative px-5 pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#74243a]/10 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#a17b49]">
                Save The Date
              </p>

              <h2 className="font-serif text-3xl font-semibold text-[#35232a] sm:text-4xl">
                Upcoming Events
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#827477]">
              Join us for meaningful conversations, creative experiences
              and memorable literary moments.
            </p>
          </div>

          {events.length > 0 ? (
            <div className="space-y-5">

              {events.map((event, index) => (
                <article
                  key={event.id}
                  className="group relative overflow-hidden rounded-2xl border border-[#74243a]/10 bg-white shadow-[0_8px_30px_rgba(53,35,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c5a16a]/50 hover:shadow-[0_18px_45px_rgba(53,35,42,0.10)]"
                >
                  <div className="grid md:grid-cols-[190px_1fr]">

                    {/* DATE PANEL */}
                    <div className="relative flex flex-col justify-center overflow-hidden bg-[#35232a] p-6 text-white sm:p-8">
                      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#c5a16a]/20" />
                      <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#74243a]/40 blur-2xl" />

                      <div className="relative">
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#c5a16a]/40 bg-white/5 text-[#d8b77f]">
                          <CalendarDays size={21} />
                        </div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8b77f]">
                          Event {String(index + 1).padStart(2, "0")}
                        </p>

                        <p className="mt-3 font-serif text-xl font-semibold leading-snug text-white">
                          {event.date}
                        </p>

                        <div className="mt-5 h-px w-12 bg-[#c5a16a]" />
                      </div>
                    </div>

                    {/* EVENT DETAILS */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9">

                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#f8f5ef] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8b6840]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#b58a4b]" />
                          Upcoming Event
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-semibold leading-snug text-[#35232a] transition-colors duration-300 group-hover:text-[#74243a] sm:text-3xl">
                        {event.title}
                      </h3>

                      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#817477] sm:text-base">
                        {event.description}
                      </p>

                      <div className="mt-6 flex flex-col gap-4 border-t border-[#74243a]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex items-start gap-2 text-sm text-[#78696d]">
                          <MapPin
                            size={17}
                            className="mt-0.5 shrink-0 text-[#b58a4b]"
                          />
                          <span>{event.location}</span>
                        </div>

                      

                      </div>
                    </div>
                  </div>
                </article>
              ))}

            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#c5a16a]/60 bg-white/70 px-6 py-20 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f8f5ef] text-[#b58a4b]">
                <CalendarDays size={30} />
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#35232a]">
                New Events Coming Soon
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#817477]">
                Stay connected for upcoming book launches, literary
                gatherings and special appearances.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section className="relative overflow-hidden bg-[#35232a] px-5 py-16 text-center sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#c5a16a]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#74243a]/40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#c5a16a]/40 bg-white/5 text-[#d8b77f]">
            <Feather size={26} />
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#c5a16a]">
            Let's Connect
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#f8f5ef] sm:text-4xl">
            Have an Event in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Interested in a literary event, book discussion or collaboration?
            Get in touch and let's create something meaningful together.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d8b77f] px-7 py-3.5 text-sm font-bold text-[#35232a] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8ca96]"
          >
            Get In Touch
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function BookOpenIcon() {
  return <Feather size={15} className="text-[#b58a4b]" />;
}


import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Feather,
  Sparkles,
} from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Author Portfolio",
  description:
    "Explore articles, thoughts, stories and reflections from the author.",
};

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-[#f8f5ef]">
      {/* HERO */}
      <section className="relative px-5 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#74243a]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#c5a16a]/[0.13] blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c5a16a]/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6840] shadow-sm">
            <Sparkles size={14} />
            The Journal
          </div>

          <h1 className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-[#35232a] sm:text-6xl md:text-7xl">
            Ideas &{" "}
            <span className="italic text-[#74243a]">Reflections.</span>
          </h1>

          <div className="my-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#c5a16a]" />
            <Feather className="text-[#b58a4b]" size={22} />
            <span className="h-px w-12 bg-[#c5a16a]" />
          </div>

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#75676a] sm:text-lg">
            A collection of thoughts, experiences and stories. Discover
            meaningful words, fresh perspectives and little moments of
            inspiration.
          </p>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="relative px-5 pb-24 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#74243a]/10 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#a17b49]">
                Explore & Discover
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#35232a] sm:text-4xl">
                Latest Stories
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#827477]">
              Words worth reading, ideas worth sharing and stories worth
              remembering.
            </p>
          </div>

          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#74243a]/10 bg-white shadow-[0_8px_30px_rgba(53,35,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5a16a]/50 hover:shadow-[0_22px_50px_rgba(53,35,42,0.12)]"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden bg-[#eee7df]"
                    aria-label={`Read ${post.title}`}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#24151b]/45 via-transparent to-transparent opacity-70" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#74243a] backdrop-blur-md">
                      {post.category}
                    </span>

                    <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#74243a] shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#74243a] group-hover:text-white">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="mb-4 flex items-center gap-2 text-xs font-medium text-[#9b898b]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c5a16a]" />
                      {post.date}
                    </div>

                    <h3 className="mb-3 font-serif text-2xl font-semibold leading-snug text-[#35232a] transition-colors duration-300 group-hover:text-[#74243a]">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mb-6 flex-1 text-sm leading-7 text-[#817477]">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto border-t border-[#74243a]/10 pt-5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#74243a] transition-all duration-300 hover:gap-3"
                      >
                        Read Article
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#c5a16a]/60 bg-white/70 px-6 py-20 text-center">
              <BookOpen className="mx-auto mb-5 text-[#b58a4b]" size={42} />
              <h3 className="font-serif text-2xl font-semibold text-[#35232a]">
                Stories Coming Soon
              </h3>
              <p className="mt-3 text-sm text-[#817477]">
                New articles and reflections will be available here soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative overflow-hidden bg-[#35232a] px-5 py-16 text-center sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#c5a16a]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#74243a]/40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <Feather className="mx-auto mb-5 text-[#c5a16a]" size={30} />
          <p className="font-serif text-2xl italic leading-relaxed text-[#f8f5ef] sm:text-3xl">
            “Writing is the painting of the voice.”
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-[#c5a16a]" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a16a]">
            The Art of Words
          </p>
        </div>
      </section>
    </main>
  );
}

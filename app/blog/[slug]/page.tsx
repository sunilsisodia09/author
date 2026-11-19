
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Feather,
  Sparkles,
} from "lucide-react";
import { blogPosts } from "@/data/blog";

export const instant = false;

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ExtendedBlogPost = (typeof blogPosts)[number] & {
  content?: string;
  body?: string;
  paragraphs?: string[];
  author?: string;
};

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | Author Portfolio",
    };
  }

  return {
    title: `${post.title} | Author Portfolio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogDetailPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const currentPost = post as ExtendedBlogPost;

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== currentPost.slug)
    .slice(0, 3);

  const articleContent =
    currentPost.content || currentPost.body || currentPost.excerpt;

  const paragraphs = currentPost.paragraphs?.length
    ? currentPost.paragraphs
    : articleContent
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

  return (
    <main className="overflow-hidden bg-[#f8f5ef]">

      {/* ARTICLE HERO */}
      <section className="relative px-5 pb-10 pt-20 sm:pt-24">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#74243a]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#c5a16a]/[0.12] blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#806e70] transition-colors hover:text-[#74243a]"
          >
            <ArrowLeft size={17} />
            Back to Journal
          </Link>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#c5a16a]/50 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8b6840]">
              {currentPost.category}
            </span>

            <span className="flex items-center gap-2 text-xs font-medium text-[#968589]">
              <CalendarDays size={14} />
              {currentPost.date}
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-[#35232a] sm:text-4xl md:text-5xl">
            {currentPost.title}
          </h1>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c5a16a]" />
            <Feather size={20} className="text-[#b58a4b]" />
            <span className="h-px w-10 bg-[#c5a16a]" />
          </div>

          <p className="max-w-3xl text-sm leading-7 text-[#78696d] sm:text-base sm:leading-8">
            {currentPost.excerpt}
          </p>
        </div>
      </section>

      {/* SMALLER FEATURED IMAGE */}
      <section className="px-5 pb-10 sm:pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="group relative mx-auto h-[210px] w-full max-w-3xl overflow-hidden rounded-xl bg-[#e8dfd7] shadow-[0_12px_35px_rgba(53,35,42,0.12)] sm:h-[280px] sm:rounded-2xl md:h-[340px]">
            <Image
              src={currentPost.image}
              alt={currentPost.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 768px, 900px"
              className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="px-5 pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-12">

          <article className="min-w-0">

            {/* AUTHOR */}
            <div className="mb-7 flex items-center gap-3 border-b border-[#74243a]/10 pb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#74243a] text-[#f8f5ef]">
                <Feather size={19} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#35232a]">
                  {currentPost.author || "The Author"}
                </p>
                <p className="mt-1 text-xs text-[#968589]">
                  Author & Storyteller
                </p>
              </div>
            </div>

            {/* ARTICLE TEXT */}
            <div className="space-y-5 font-serif text-base leading-[1.9] text-[#5f5155] sm:text-lg sm:leading-[2]">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-[#74243a]"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* QUOTE */}
            <div className="mt-10 rounded-xl border border-[#c5a16a]/30 bg-white/70 p-6 sm:p-8">
              <Feather className="mb-3 text-[#b58a4b]" size={23} />

              <p className="font-serif text-lg italic leading-relaxed text-[#74243a] sm:text-xl">
                Every story has a meaning, and every word has the power to inspire.
              </p>
            </div>

            {/* BACK BUTTON */}
            <div className="mt-8 border-t border-[#74243a]/10 pt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-[#74243a]/20 px-5 py-3 text-sm font-bold text-[#74243a] transition-all duration-300 hover:border-[#74243a] hover:bg-[#74243a] hover:text-white"
              >
                <ArrowLeft size={16} />
                Back to All Articles
              </Link>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-5">

            <div className="rounded-xl bg-[#35232a] p-6 text-[#f8f5ef] shadow-lg">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a16a]/40 bg-white/5 text-[#c5a16a]">
                <BookOpen size={20} />
              </div>

              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c5a16a]">
                Keep Exploring
              </p>

              <h3 className="font-serif text-xl font-semibold leading-snug">
                Discover More Stories
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Explore more thoughts, experiences and reflections from the journal.
              </p>

              <Link
                href="/blog"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#d8b77f] transition-all hover:gap-3"
              >
                Explore Journal
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="rounded-xl border border-[#74243a]/10 bg-white p-6">
              <div className="mb-3 flex items-center gap-2 text-[#b58a4b]">
                <Sparkles size={16} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  A Thought
                </span>
              </div>

              <p className="font-serif text-lg italic leading-relaxed text-[#35232a]">
                Words are small, but their impact can be everlasting.
              </p>
            </div>

          </aside>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-[#74243a]/10 bg-white/60 px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">

            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#a17b49]">
                  Continue Reading
                </p>

                <h2 className="font-serif text-2xl font-semibold text-[#35232a] sm:text-3xl">
                  You May Also Like
                </h2>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#74243a] transition-all hover:gap-3"
              >
                View All Articles
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  href={`/blog/${item.slug}`}
                  key={item.id}
                  className="group overflow-hidden rounded-xl border border-[#74243a]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  {/* SMALL RELATED IMAGE */}
                  <div className="relative h-[155px] overflow-hidden bg-[#eee7df] sm:h-[170px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#a17b49]">
                      {item.category} · {item.date}
                    </p>

                    <h3 className="font-serif text-lg font-semibold leading-snug text-[#35232a] transition-colors group-hover:text-[#74243a]">
                      {item.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#817477]">
                      {item.excerpt}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#74243a]">
                      Read More
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

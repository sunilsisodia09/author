
import Link from "next/link";

const articles = [
  {
    id: 1,
    category: "Writing",
    date: "November 12, 2026",
    title: "The Beauty of Finding Stories in Everyday Life",
    description:
      "Every ordinary moment holds an extraordinary story waiting to be discovered.",
    slug: "#",
  },
  {
    id: 2,
    category: "Inspiration",
    date: "November 08, 2026",
    title: "Why Words Have the Power to Change Us",
    description:
      "Explore how meaningful words can inspire new thoughts and perspectives.",
    slug: "#",
  },
  {
    id: 3,
    category: "Literature",
    date: "November 02, 2026",
    title: "The Timeless Magic of Reading Books",
    description:
      "Discover why books remain our closest companions through every chapter of life.",
    slug: "#",
  },
];

export default function LatestArticles() {
  return (
    <section className="bg-[#f8f6f1] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#b58a4b]">
            From The Journal
          </p>
          <h2 className="font-serif text-4xl text-[#25231f] md:text-5xl">
            Latest Articles
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-[#77736c]">
            Thoughts, reflections and stories about writing, creativity and life.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group border border-[#e9e2d5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-8 flex aspect-[16/9] items-center justify-center bg-[#e9e2d5]">
                <span className="font-serif text-5xl text-[#b58a4b]">
                  {String(article.id).padStart(2, "0")}
                </span>
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-[#77736c]">
                <span className="font-semibold uppercase tracking-wider text-[#b58a4b]">
                  {article.category}
                </span>
                <span>•</span>
                <span>{article.date}</span>
              </div>

              <h3 className="mb-4 font-serif text-2xl leading-snug text-[#25231f] transition group-hover:text-[#b58a4b]">
                {article.title}
              </h3>

              <p className="mb-6 text-sm leading-7 text-[#77736c]">
                {article.description}
              </p>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#25231f] transition hover:text-[#b58a4b]"
              >
                Read Article <span>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-[#b58a4b] px-7 py-3 text-sm font-semibold text-[#25231f] transition hover:bg-[#25231f] hover:text-white"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

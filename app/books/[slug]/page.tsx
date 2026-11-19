import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/data/books";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default async function BookDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);

  if (!book) notFound();

  return (
    <section className="section-padding">
      <div className="container-main">
        <Link href="/books" className="text-sm text-[#b58a4b]">
          ← Back to all books
        </Link>

        <div className="mt-10 grid items-center gap-14 md:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden bg-[#e9e3d9]">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">{book.category}</p>
            <h1 className="section-heading mt-4">{book.title}</h1>
            <p className="mt-5 text-sm text-[#77736c]">
              Published in {book.year}
            </p>
            <p className="mt-8 text-base leading-8 text-[#77736c]">
              {book.description}
            </p>
            <p className="mt-5 text-sm leading-8 text-[#77736c]">
              Discover this work and explore the ideas, emotions and stories
              behind its pages.
            </p>
            <Link href="/contact" className="gold-button mt-8">
              Enquire About This Book
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
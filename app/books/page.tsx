import type { Metadata } from "next";
import { books } from "@/data/books";
import BookCard from "@/components/ui/BookCard";

export const metadata: Metadata = {
  title: "Books",
  description: "Explore the author's books and publications.",
};

export default function BooksPage() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <p className="eyebrow mb-4">THE COLLECTION</p>
        <h1 className="section-heading">Books & Publications</h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#77736c]">
          Explore stories, ideas and creative works written to inspire and
          connect with readers.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
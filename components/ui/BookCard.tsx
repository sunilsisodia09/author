
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Book } from "@/types/book";

export default function BookCard({ book }: { book: Book }) {
  const bookWithBuyLink = book as Book & { buyLink?: string };

  return (
    <article className="group relative h-full">

      {/* CARD */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-sm border border-[#e8dfd5] bg-[#fffefa] shadow-[0_5px_25px_rgba(55,30,30,0.04)] transition-all duration-700 ease-out hover:-translate-y-3 hover:border-[#8b2942]/40 hover:shadow-[0_25px_55px_rgba(75,25,40,0.14)]">

        {/* IMAGE AREA */}
        <Link
          href={`/books/${book.slug}`}
          className="relative block aspect-[4/5] overflow-hidden bg-[#f0ebe4]"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#291820]/20 via-transparent to-white/10 opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

          <Image
            src={book.image}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-7 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-[-2deg]"
          />

          {/* CATEGORY LABEL */}
          <span className="absolute left-5 top-5 z-20 bg-[#74243a] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-md transition-all duration-500 group-hover:bg-[#9b3d55]">
            {book.category}
          </span>

          {/* IMAGE ACTION ICON */}
          <span className="absolute bottom-5 right-5 z-20 flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-[#74243a] text-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={20} />
          </span>

          {/* IMAGE BOTTOM LINE */}
          <div className="absolute bottom-0 left-0 z-20 h-[3px] w-0 bg-[#c5a16a] transition-all duration-700 group-hover:w-full" />
        </Link>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-6 md:p-7">

          <div className="translate-y-2 opacity-80 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a17b51]">
              {book.category}
            </p>

            <Link href={`/books/${book.slug}`}>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-[#35232a] transition-colors duration-500 group-hover:text-[#8b2942]">
                {book.title}
              </h3>
            </Link>

            <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#77716c]">
              {book.description}
            </p>

          </div>

          {/* BUTTONS */}
          <div className="mt-auto flex flex-wrap gap-3 pt-7">

            <Link
              href={`/books/${book.slug}`}
              className="group/details inline-flex flex-1 items-center justify-center gap-2 border border-[#74243a] px-3 py-3 text-[10px] font-bold uppercase tracking-wider text-[#74243a] transition-all duration-500 hover:bg-[#74243a] hover:text-white sm:text-xs"
            >
              Discover
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover/details:translate-x-1 group-hover/details:-translate-y-1"
              />
            </Link>

            <a
              href={bookWithBuyLink.buyLink || "/contact"}
              target={bookWithBuyLink.buyLink ? "_blank" : undefined}
              rel={bookWithBuyLink.buyLink ? "noopener noreferrer" : undefined}
              className="group/buy inline-flex flex-1 items-center justify-center gap-2 bg-[#74243a] px-3 py-3 text-[10px] font-bold uppercase tracking-wider text-white transition-all duration-500 hover:bg-[#35232a] sm:text-xs"
            >
              <ShoppingBag
                size={15}
                className="transition-transform duration-300 group-hover/buy:-translate-y-1"
              />
              Buy Book
            </a>

          </div>
        </div>

        {/* GOLD BORDER ANIMATION */}
        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#c5a16a] transition-all duration-700 group-hover:w-full" />

      </div>
    </article>
  );
}

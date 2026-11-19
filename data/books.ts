import { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: 1,
    slug: "the-art-of-living",
    title: "The Art of Living",
    category: "Personal Growth",
    description:
      "A thoughtful journey into discovering purpose, peace and the beauty of everyday life.",
    image: "/images/books/book-1.jpg",
    year: "2025",
  },
  {
    id: 2,
    slug: "words-from-the-heart",
    title: "Words From The Heart",
    category: "Poetry",
    description:
      "A collection of heartfelt poems about love, memories and human emotions.",
    image: "/images/books/book-2.jpg",
    year: "2024",
  },
  {
    id: 3,
    slug: "beyond-the-horizon",
    title: "Beyond The Horizon",
    category: "Fiction",
    description:
      "An inspiring story about dreams, courage and finding your own path.",
    image: "/images/books/book-3.jpg",
    year: "2023",
  },
];
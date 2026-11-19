import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "power-of-writing",
    title: "The Quiet Power of Writing",
    excerpt: "How writing can help us understand ourselves and the world.",
    content:
      "Writing is more than putting words on paper. It is a way to understand our thoughts, preserve memories and express emotions. Every page gives us an opportunity to discover something new about ourselves.",
    category: "Writing",
    date: "November 12, 2025",
    image: "/images/gallery/writing.jpg",
  },
  {
    id: 2,
    slug: "finding-inspiration",
    title: "Finding Inspiration in Everyday Life",
    excerpt: "The little moments that often become the biggest stories.",
    content:
      "Inspiration is everywhere. It lives in conversations, nature, journeys and ordinary moments. A writer learns to notice these details and transform them into meaningful stories.",
    category: "Inspiration",
    date: "October 20, 2025",
    image: "/images/gallery/inspiration.jpg",
  },
  {
    id: 3,
    slug: "why-stories-matter",
    title: "Why Stories Matter",
    excerpt: "Stories connect people across generations and cultures.",
    content:
      "Stories help us share experiences, understand different perspectives and connect with one another. They preserve our memories and make ideas last beyond a single moment.",
    category: "Literature",
    date: "September 15, 2025",
    image: "/images/gallery/stories.jpg",
  },
];
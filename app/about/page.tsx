
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Author",
  description:
    "Discover the author's story, writing journey, inspiration and passion for storytelling.",
};

const journey = [
  {
    number: "01",
    title: "The Beginning",
    description:
      "Every writer has a beginning. My journey started with a love for words, a curious mind and a desire to express the thoughts and emotions that often remain unspoken.",
  },
  {
    number: "02",
    title: "Finding My Voice",
    description:
      "Over time, writing became more than just a hobby. I began exploring different ideas, observing everyday life and discovering my own voice through stories and personal experiences.",
  },
  {
    number: "03",
    title: "Growing Through Stories",
    description:
      "Every experience taught me something new. Reading, writing and connecting with different perspectives helped me grow as a storyteller and understand the power of meaningful words.",
  },
  {
    number: "04",
    title: "The Journey Ahead",
    description:
      "My journey as a writer continues with new ideas, creative possibilities and stories waiting to be told. I hope my words inspire readers and create meaningful connections.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#faf9f6] text-[#29251f]">

      {/* HERO BACKGROUND - HALF SCREEN */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden md:min-h-[55vh]">

        <Image
          src="/images/author/author-profile.jpg"
          alt="Author background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[#e0bd83]">
            Discover My Story
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            About the Author
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/85 md:text-base">
            Every story has a soul, every word has a meaning,
            and every journey begins with a single thought.
          </p>

          <div className="mx-auto mt-8 h-[2px] w-16 bg-[#c49a5a]" />
        </div>
      </section>

      {/* AUTHOR INTRODUCTION */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-20">

          <div className="relative mx-auto w-full max-w-[450px]">
            <div className="absolute -bottom-5 -left-5 h-full w-full border border-[#c49a5a]" />

            <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e3d9]">
              <Image
                src="/images/author/author-profile.jpg"
                alt="Portrait of the author"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#b58a4b]">
              A Little Introduction
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Hello, I'm the
              <span className="italic text-[#b58a4b]"> Author.</span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-[#77736c]">
              I am a passionate writer, storyteller and observer of life.
              I believe that words have the power to inspire, comfort and
              connect people across different experiences.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#77736c]">
              My writing explores human emotions, everyday experiences,
              personal growth and the beauty of imagination. I find inspiration
              in the little moments of life, meaningful conversations,
              relationships and the world around me.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#77736c]">
              For me, writing is not simply about putting words on a page.
              It is about expressing feelings, sharing perspectives and
              creating something that stays with readers long after
              they finish reading.
            </p>

            <p className="mt-8 font-serif text-2xl italic text-[#b58a4b]">
              "Every page is a new beginning."
            </p>
          </div>
        </div>
      </section>

      {/* WRITING JOURNEY */}
      <section className="bg-[#f0ece5] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl">

          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#b58a4b]">
              My Story
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              My Writing Journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#77736c]">
              A journey shaped by imagination, experiences,
              creativity and the endless love for storytelling.
            </p>
          </div>

          <div className="space-y-10">
            {journey.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 border-b border-[#d8cfc1] pb-10 md:grid-cols-[100px_1fr]"
              >
                <div className="font-serif text-4xl text-[#b58a4b]">
                  {item.number}
                </div>

                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-8 text-[#77736c]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING INSPIRATION */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#b58a4b]">
              What Inspires Me
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Life is my greatest
              <span className="italic text-[#b58a4b]"> inspiration.</span>
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-[#77736c]">
            <p>
              Inspiration can be found everywhere: in a quiet morning,
              an unexpected conversation, a beautiful memory or even
              a difficult experience.
            </p>

            <p>
              I love exploring emotions, human connections, dreams,
              challenges and the little details that make every life
              story unique.
            </p>

            <p>
              These observations shape my thoughts and encourage me
              to transform everyday experiences into meaningful words.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL QUOTE */}
      <section className="relative overflow-hidden bg-[#29251f] px-6 py-24 text-center text-white md:py-32">
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[#c49a5a]">
            A Thought to Remember
          </p>

          <h2 className="font-serif text-3xl italic leading-relaxed md:text-5xl">
            "Words are more than letters.
            They are emotions, memories and stories
            waiting to be discovered."
          </h2>

          <div className="mx-auto mt-10 h-[2px] w-16 bg-[#c49a5a]" />

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/60">
            With Love, The Author
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute -bottom-20 -right-10 font-serif text-[250px] text-white/[0.03]"
        >
          W
        </div>
      </section>

    </main>
  );
}

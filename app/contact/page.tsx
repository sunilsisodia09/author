
"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Send,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Feather,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Address",
    value: "hello@example.com",
    link: "mailto:hello@example.com",
    description: "Send me an email anytime",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    description: "Available for professional enquiries",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat on WhatsApp",
    link: "https://wa.me/919876543210",
    description: "Let's connect directly",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    link: "https://maps.google.com/?q=India",
    description: "Available for collaborations worldwide",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden bg-[#f8f5ef]">

      {/* HERO SECTION */}
      <section className="relative px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#b58a4b]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#74243a]/10 blur-3xl" />

        <div className="container-main relative mx-auto max-w-5xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b58a4b]/30 bg-white/70 px-5 py-2">
            <Feather size={15} className="text-[#b58a4b]" />
            <span className="text-[10px] font-semibold tracking-[3px] text-[#74243a]">
              LET'S CONNECT
            </span>
          </div>

          <h1 className="font-serif text-4xl leading-tight text-[#35232a] sm:text-5xl md:text-6xl">
            Let's Start a{" "}
            <span className="italic text-[#8b354e]">
              Conversation.
            </span>
          </h1>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b58a4b]/60" />
            <Feather size={19} className="text-[#b58a4b]" />
            <span className="h-px w-12 bg-[#b58a4b]/60" />
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#77736c] sm:text-base">
            Have a question, collaboration idea, interview request or literary
            invitation? I would love to hear from you. Let's create something
            meaningful together.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="container-main mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT CONTACT INFORMATION */}
            <div className="relative overflow-hidden rounded-2xl bg-[#35232a] p-7 text-white shadow-xl shadow-[#35232a]/10 sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#b58a4b]/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#8b354e]/30 blur-3xl" />

              <div className="relative z-10">
                <p className="text-[10px] font-semibold tracking-[3px] text-[#c5a16a]">
                  CONTACT INFORMATION
                </p>

                <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                  Get in Touch
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Whether you want to discuss literature, invite me to an
                  event, or simply say hello, my inbox is always open.
                </p>

                {/* CONTACT DETAILS */}
                <div className="mt-10 space-y-8">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    const external =
                      item.title === "Location" ||
                      item.title === "WhatsApp";

                    return (
                      <a
                        key={item.title}
                        href={item.link}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-4"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c5a16a] transition-all duration-300 group-hover:border-[#c5a16a] group-hover:bg-[#c5a16a] group-hover:text-[#35232a]">
                          <Icon size={20} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-serif text-lg text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 break-words text-sm text-[#c5a16a] transition-colors group-hover:text-white">
                            {item.value}
                          </p>

                          <p className="mt-1 text-xs text-white/40">
                            {item.description}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="mt-1 shrink-0 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c5a16a]"
                        />
                      </a>
                    );
                  })}
                </div>

                {/* DECORATIVE QUOTE */}
                <div className="mt-12 border-t border-white/10 pt-8">
                  <Feather size={25} className="text-[#c5a16a]" />

                  <p className="mt-4 font-serif text-xl italic leading-relaxed text-white/80">
                    "Words connect hearts, and conversations create
                    possibilities."
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CONTACT FORM */}
            <div className="rounded-2xl border border-[#e8dfd3] bg-white p-7 shadow-[0_10px_40px_rgba(53,35,42,0.05)] sm:p-10">
              <div className="mb-8">
                <p className="text-[10px] font-semibold tracking-[3px] text-[#b58a4b]">
                  SEND A MESSAGE
                </p>

                <h2 className="mt-3 font-serif text-3xl text-[#35232a] sm:text-4xl">
                  Write to Me
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#77736c]">
                  Fill out the form below and share your thoughts.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                onChange={() => setSubmitted(false)}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold text-[#35232a]"
                    >
                      Your Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#e8dfd3] bg-[#fdfbf8] px-4 py-4 text-sm text-[#35232a] outline-none transition-all placeholder:text-[#aaa198] focus:border-[#b58a4b] focus:bg-white focus:ring-2 focus:ring-[#b58a4b]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold text-[#35232a]"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-[#e8dfd3] bg-[#fdfbf8] px-4 py-4 text-sm text-[#35232a] outline-none transition-all placeholder:text-[#aaa198] focus:border-[#b58a4b] focus:bg-white focus:ring-2 focus:ring-[#b58a4b]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold text-[#35232a]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-[#e8dfd3] bg-[#fdfbf8] px-4 py-4 text-sm text-[#35232a] outline-none transition-all placeholder:text-[#aaa198] focus:border-[#b58a4b] focus:bg-white focus:ring-2 focus:ring-[#b58a4b]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold text-[#35232a]"
                  >
                    Subject *
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border border-[#e8dfd3] bg-[#fdfbf8] px-4 py-4 text-sm text-[#35232a] outline-none transition-all placeholder:text-[#aaa198] focus:border-[#b58a4b] focus:bg-white focus:ring-2 focus:ring-[#b58a4b]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold text-[#35232a]"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full resize-y rounded-xl border border-[#e8dfd3] bg-[#fdfbf8] px-4 py-4 text-sm text-[#35232a] outline-none transition-all placeholder:text-[#aaa198] focus:border-[#b58a4b] focus:bg-white focus:ring-2 focus:ring-[#b58a4b]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#74243a] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#74243a]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#54202f] sm:w-auto"
                >
                  Send Message
                  <Send size={17} />
                </button>

                {submitted && (
                  <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-[#765b29]">
                    <CheckCircle2 size={19} className="shrink-0" />
                    <p>
                      This form is currently in demo mode. Connect an email
                      service or backend to receive messages.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM QUOTE */}
      <section className="bg-[#35232a] px-5 py-14 text-center sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Feather size={27} className="mx-auto text-[#c5a16a]" />

          <h2 className="mt-5 font-serif text-2xl italic leading-relaxed text-white sm:text-3xl">
            "Every meaningful connection begins with a simple hello."
          </h2>

          <p className="mt-5 text-[10px] font-semibold tracking-[3px] text-[#c5a16a]">
            LOOKING FORWARD TO HEARING FROM YOU
          </p>
        </div>
      </section>
    </main>
  );
}

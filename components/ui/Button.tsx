
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  outline = false,
  className = "",
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Link
      href={href}
      onClick={() => {
        setPressed(true);
        window.setTimeout(() => setPressed(false), 180);
      }}
      className={`
        group relative inline-flex items-center justify-center gap-3
        overflow-hidden px-7 py-4
        text-xs font-bold uppercase tracking-[0.16em]
        transition-all duration-500 ease-out
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#9b3d55] focus-visible:ring-offset-4
        ${
          outline
            ? "border border-[#74243a] bg-transparent text-[#74243a] hover:bg-[#74243a] hover:text-white"
            : "border border-[#74243a] bg-[#74243a] text-white hover:border-[#35232a] hover:bg-[#35232a]"
        }
        hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(116,36,58,0.2)]
        active:translate-y-0 active:scale-95
        ${pressed ? "scale-95" : ""}
        ${className}
      `}
    >
      <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-1">
        {children}
      </span>

      <ArrowRight
        size={17}
        strokeWidth={1.8}
        className="relative z-10 transition-all duration-500 group-hover:translate-x-2"
      />

      {/* GOLD HOVER LINE */}
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#c5a16a] transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}

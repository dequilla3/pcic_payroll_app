"use client";

import { useEffect, useState } from "react";

interface PageHeaderTitleProps {
  title?: string;
}

export function PageHeaderTitle({ title }: PageHeaderTitleProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div
        className={`border-l-4 border-green-500 pl-2 mb-2 font-bold text-sm transition-all ${
          isScrolled ? "fixed top-0 z-10 bg-white w-full p-2 shadow-lg" : ""
        }`}
      >
        {title}
      </div>
      <hr />
    </section>
  );
}

"use client";

import React from "react";
import { useState, useEffect } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

export default function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {backToTopButton && (
        <div
          className="fixed bottom-16 right-0 z-10 flex h-16 w-16
                justify-center rounded-xl bg-background"
        >
          <button>
            <BsArrowUpSquareFill
              onClick={scrollUp}
              className="right-4 h-12 w-12 text-secondary lg:h-9 lg:w-9"
              aria-label="Scroll Up"
            />
          </button>
        </div>
      )}
    </>
  );
}

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
                    className="z-10 flex justify-center h-16 w-16 rounded-xl bg-background
                fixed right-0 bottom-16"
                >
                    <button>
                        <BsArrowUpSquareFill
                            onClick={scrollUp}
                            className="h-12 w-12 lg:h-9 lg:w-9 text-secondary pulse right-4"
                            aria-label="Scroll Up"
                        />
                    </button>
                </div>
            )}
        </>
    );
}

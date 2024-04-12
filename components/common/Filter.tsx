"use client";

import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });
import clsx from "clsx";

type FilterProps = {
    category: string;
    isActive: boolean;
    onToggle: () => void;
};

export default function Filter({ category, isActive, onToggle }: FilterProps) {
    return (
        <button
            className={clsx(
                syne.className,
                {
                    "text-primary font-bold border border-primary rounded-full px-5 py-2":
                        !isActive,
                },
                {
                    " text-placeholder font-bold bg-primary rounded-full px-5 py-2":
                        isActive,
                }
            )}
            onClick={onToggle}
        >
            {category}
        </button>
    );
}

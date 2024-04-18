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
          "rounded-full border border-primary px-5 py-2 font-bold text-primary":
            !isActive,
        },
        {
          " rounded-full bg-primary px-5 py-2 font-bold text-placeholder":
            isActive,
        }
      )}
      onClick={onToggle}
    >
      {category}
    </button>
  );
}

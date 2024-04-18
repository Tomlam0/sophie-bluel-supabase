import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${syne.className} mx-auto rounded-full bg-primary px-14 py-2 text-sm font-bold text-background duration-300 ease-in-out hover:bg-primaryHover hover:transition-all`}
    >
      {text}
    </button>
  );
}

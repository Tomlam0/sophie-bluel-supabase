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
            className={`${syne.className} text-background text-sm font-bold
             bg-primary rounded-full px-14 py-2 mx-auto
             hover:bg-primaryHover hover:transition-all ease-in-out duration-300`}
        >
            {text}
        </button>
    );
}

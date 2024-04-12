import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: "#1D6154",
            primaryHover: "#0E2F28",
            secondary: "#93532F",
            text: "#3D3D3D",
            textDark: "#000000",
            placeholder: "#FFFFFF",
            background: "#FFFEF8",
            deleteIcon: "#C91111",
            addPictureForm: "#E8F1F6",
            addPictureFormDarker: "#CBD6DC",
        },
        extend: {},
    },
    plugins: [],
};
export default config;

import Image from "next/image";
import Link from "next/link";
import { PiInstagramLogoLight } from "react-icons/pi";

function Nav() {
    return (
        <nav
            className="flex flex-col md:flex-row md:justify-between
        md:gap-10 mt-8 xl:mt-12"
        >
            <Link href="/" className="flex justify-center">
                <Image
                    src="/images/logo.svg"
                    width={213}
                    height={42}
                    alt="logo"
                    priority={true}
                />
            </Link>
            <ul className="flex justify-center flex-wrap gap-8 mt-8 md:mt-0">
                <li className="nav ">
                    <a href="/#gallery">projets</a>
                </li>
                <li className="nav">
                    <a href="/#contact">contact</a>
                </li>
                <li className="nav">
                    <Link href="/login">login</Link>
                </li>
                <li>
                    <Link
                        href="https://www.instagram.com/"
                        target="blank"
                        aria-label="Instagram"
                    >
                        <PiInstagramLogoLight className="h-6 w-6 nav" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

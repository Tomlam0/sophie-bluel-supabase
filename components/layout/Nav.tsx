import Image from "next/image";
import Link from "next/link";
import { PiInstagramLogoLight } from "react-icons/pi";

function Nav() {
  return (
    <nav className="mt-8 flex select-none flex-col md:flex-row md:justify-between md:gap-10 xl:mt-12">
      <Link href="/" className="flex justify-center" draggable={false}>
        <Image
          src="/images/logo.svg"
          width={213}
          height={42}
          alt="logo"
          priority={true}
          draggable={false}
        />
      </Link>
      <ul className="mt-8 flex flex-wrap justify-center gap-8 md:mt-0">
        <li className="nav ">
          <a href="/#gallery" draggable={false}>
            projets
          </a>
        </li>
        <li className="nav">
          <a href="/#contact" draggable={false}>
            contact
          </a>
        </li>
        <li className="nav">
          <Link href="/login" draggable={false}>
            login
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/"
            target="blank"
            aria-label="Instagram"
            draggable={false}
          >
            <PiInstagramLogoLight className="nav h-6 w-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

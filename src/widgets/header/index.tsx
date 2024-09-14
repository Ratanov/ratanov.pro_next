import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

// This could be a page component
export default function Header() {
  return (
    <div className={styles.header}>
      <div className="flex align-center">
        <a href="./" target="_blank">
          <Image
            className={styles.logo}
            src="/img/crown.svg"
            width={28}
            height={28}
            alt="Ratanov.pro logo"
          />
        </a>
        <span className="px-2">ratanov.pro</span>
      </div>
      <nav className="mx-2">
        <Link className="px-3" href="/">Главная</Link>
        <Link className="px-3" href="/cv">CV</Link>
        <Link className="px-3" href="/gallery">Галерея</Link>
        <Link className="px-3" href="/about">Обо мне</Link>
      </nav>
    </div>
  );
}

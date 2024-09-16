import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import css from "@/shared/css/css.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a
        href="./"
        className={`${css.flex} ${css.align_center}`}
        target="_blank"
      >
        <Image
          className={styles.logo}
          src="/img/crown.svg"
          width={30}
          height={30}
          alt="ratanov.pro👑"
        />
        <span className={css.px_1}>ratanov.pro</span>
      </a>
      <nav className={css.mx_2}>
        <Link className={css.px_3} href="/">
          Главная
        </Link>
        <Link className={css.px_3} href="/cv">
          CV
        </Link>
        <Link className={css.px_3} href="/gallery">
          Галерея
        </Link>
        <Link className={css.px_3} href="/about">
          Обо мне
        </Link>
      </nav>
    </header>
  );
}

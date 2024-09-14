import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import css from "@/shared/css/css.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`${css.flex} ${css.align_center}`}>
        <a href="./" target="_blank">
          <Image
            className={styles.logo}
            src="/img/crown.svg"
            width={28}
            height={28}
            alt="ratanov.pro logo"
          />
        </a>
        <span className={css.px_2}>ratanov.pro</span>
      </div>
      <nav className={css.mx_2}>
        <Link className={css.px_3} href="/">Главная</Link>
        <Link className={css.px_3} href="/cv">CV</Link>
        <Link className={css.px_3} href="/gallery">Галерея</Link>
        <Link className={css.px_3} href="/about">Обо мне</Link>
      </nav>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import css from "@/shared/css/css.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
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
        <span className={css.px_2}>actuated by ratanov.pro</span>
      </div>
    </div>
  );
}

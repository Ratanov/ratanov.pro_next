import Image from "next/image";
import styles from "./cv-about.module.css";

export default function CVAbout() {
  return (
    <div className={styles.cv_about}>
      <div className={styles.cv__img}>
        <h2>Олег Ратанов</h2>
        <Image
          src="/img/oleg-ratanov.jpg"
          alt="oleg"
          width={200}
          height={200}
        />
        <p>Мужчина, 35 лет</p>
        <p>Frontend Team Lead</p>
      </div>
      <div className={styles.cv_contacts}>
        <h4>Контакты</h4>
        <p>
          тел.:{" "}
          <a href="tel:+79600878708" type="tel" title="сотовый телефон">
            +7 (960) 087-87-08
          </a>
          ; tg, wa
        </p>
        <p>
          почта:{" "}
          <a
            href="mailto:79600878708@yandex.ru"
            type="email"
            title="электронный почтовый ящик"
          >
            79600878708@yandex.ru
          </a>
        </p>
        <p>
          сайт:{" "}
          <a href="https://ratanov.pro" title="персональная страница">
            https://ratanov.pro/
          </a>
        </p>
      </div>
      <div className={styles.cv_summary}>
        <h4>Обо мне</h4>
        <p>бла</p>
        <p>бла бла</p>
        <p>бла бла бла</p>
      </div>
    </div>
  );
}

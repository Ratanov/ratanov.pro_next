import MainLayout from "@/app/main-layout";
import Image from "next/image";
import Rating from "@/features/rating";
import styles from "./cv.module.css";
import CVSkills from "@/features/cv-skills";

export default function CV() {
  return (
    <MainLayout>
      <div className={styles.cv}>
        <div className={styles.cv__left}>
          <div className={styles.cv__im}>
            <Image
              src="/img/oleg-ratanov.jpg"
              width={200}
              height={200}
              alt="oleg"
            />
            <h1>Oleg Ratanov</h1>
            <p>Мужчина, 35 лет</p>
            <p>Frontend Team Lead</p>
          </div>
          <div className={styles.cv__contacts}>
            <h4>Контакты</h4>
            <p>
              +7 (960) 087-87-08 Telegram, WhatsApp — предпочитаемый способ
              связи
            </p>
            <p>79600878708@ya.ru</p>
            <p>https://ratanov.pro/</p>
          </div>
          <div className={styles.cv__summary}>
            <h3>Обо мне</h3>
          </div>
          <CVSkills />
        </div>
        <div className={styles.cv__right}>
          <div className={styles.cv__experience}>
            <h3>experience</h3>
          </div>
          <div className={styles.cv__education}>
            <h3>education</h3>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

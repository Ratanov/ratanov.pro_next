import Image from "next/image";
import styles from "./cv-exp.module.css";
import css from "@/shared/css/css.module.css";

export default function CVExp() {
  return (
    <div className={styles.cv_exp}>
      <div className={styles.cv_exp__header}>
        <h2>Опыт работы</h2>
        <h3>14 лет 6 месяцев</h3>
      </div>
      <div className={styles.cv_exp__body}>
        <div className={styles.cv_job}>
          <div className={styles.cv_job__info}>
            <div className={styles.cv_job__logo}>
              <img src="/img/tatneft-it-logo.png" alt="Татнефть IT" />
            </div>
            <div className={css.px_3}>
              <div className={styles.cv_job__name}>ПАО Татнефть</div>
              <div className={styles.cv_job__desc}>4 года 6 месяцев</div>
              <div className={styles.cv_job__city}>г. Альметьевск</div>
            </div>    
          </div>

          <ul className={css.ml_5}>
            <li className={styles.cv_job__position}>
              <div className={styles.cv_job__title}>Ведущий программист отдела фронт-энд</div>
              <div className={styles.cv_job__schedule}>ООО ТатИТнефть, полный рабочий день</div>
              <div className={styles.cv_job__start_stop}>29.07.2022 — по настоящее время</div>
              <div className={styles.cv_job__total_time}>2 года 2 месяца</div>
            </li>
            <li className={styles.cv_job__position}>
              <div className={styles.cv_job__title}>Ведущий программист отдела фронт-энд</div>
              <div className={styles.cv_job__schedule}>Татнефть – Цифровое развитие ПАО Татнефть, полный рабочий день</div>
              <div className={styles.cv_job__start_stop}>02.09.2021 — 28.07.2022</div>
              <div className={styles.cv_job__total_time}>2 года 2 месяца</div>
            </li>
            <li className={styles.cv_job__position}>
              <div className={styles.cv_job__title}>Инженер 2 категории, группа сопровождения АСУТП</div>
              <div className={styles.cv_job__schedule}>ООО Процессинговый центр, полный рабочий день</div>
              <div className={styles.cv_job__start_stop}>04.03.2020 — 23.08.2021</div>
              <div className={styles.cv_job__total_time}>2 года 2 месяца</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.cv_exp__footer}>

      </div>
    </div>
  );
}

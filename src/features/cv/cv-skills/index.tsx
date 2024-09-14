import Rating from "../../rating";
import styles from "./cv-skills.module.css";

export default function CVSkills() {
  return (
    <div className={styles.cv_skills}>
      <h2>Навыки</h2>
      {/* <p>HTML, CSS, JS</p> */}
      <Rating skill="HTML, CSS, JS" percent={75} iconSize="l" showOutOf={true} showTotal={true} interaction={false} />
    </div>
  );
}

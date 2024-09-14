import Rating from "../rating";
import styles from "./cv-skills.module.css";

export default function CVSkills() {
  return (
    <div className={styles.cv__skills}>
      <h3>Навыки</h3>
      {/* <p>HTML, CSS, JS</p> */}
      <Rating skill="HTML, CSS, JS" percent={75} iconSize="l" showOutOf={true} showTotal={true} interaction={false} />
    </div>
  );
}

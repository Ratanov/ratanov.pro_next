import MainLayout from "@/app/main-layout";
import styles from "./cv.module.css";
import CVSkills from "@/features/cv/cv-skills";
import CVAbout from "@/features/cv/cv-about";
import CVExp from "@/features/cv/cv-experience";
import CVEdu from "@/features/cv/cv-education";

export default function CV() {
  return (
    <MainLayout>
      <div className={styles.cv}>
        <div className={styles.cv__left}>
          <CVAbout />
          <hr />
          <CVSkills />
        </div>
        <div style={{border: "1px solid #d4d4d4; height: '100%'"}}></div>
        <div className={styles.cv__right}>
          <CVExp />
          <hr />
          <CVEdu />
        </div>
      </div>
    </MainLayout>
  );
}

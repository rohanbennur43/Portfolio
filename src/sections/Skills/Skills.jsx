import styles from "./SkillsStyles.module.css"
import SkillsList from "../../common/SkillsList";
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillsList skill="Golang"/>
        </div>
    </section>
  )
}

export default Skills;

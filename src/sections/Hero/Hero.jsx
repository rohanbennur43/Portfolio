import styles from "./HeroStyles.module.css"
import heroImg from "../../assets/rohan.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import linkedInLight from "../../assets/linkedin-light.svg"
import linkedInDark from "../../assets/linkedin-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import CV from "../../assets/Rohan_bennur_resume \(2\).pdf"
import { useTheme } from "../../common/ThemeContext"

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme == "light"?sun:moon;
    const linkedIn = theme == "light"?linkedInLight:linkedInDark;
    const gitHub = theme == "light"?githubLight:githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModecContainer}> <img className={styles.hero} src={heroImg} alt="Profile Picture Rohan" />
      <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}></img>
      </div>
      <div>
        <h1>Rohan <br /> Bennur</h1>
        <span>
            <a href="https://linkedin.com" target="_blank">
                <img src={linkedIn} alt="" />
            </a>
            <a href="https://github.com" target="_blank">
                <img src={gitHub} alt="" />
            </a>
        </span>
        <p> With a passion for research in distributed and cloud computing</p>
        <a href={CV} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero

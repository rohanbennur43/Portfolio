import styles from './ProjectsStyles.module.css'
import Viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
        <ProjectCard src={Viberr} link="https://github.com/rohanbennur43/hls-streaming-app" projectName="Hls Streaming app" projectDesc="Video Streaming App"/>
        <ProjectCard src={Viberr} link="https://github.com/rohanbennur43/hls-streaming-app" projectName="Hls Streaming app" projectDesc="Video Streaming App"/>
        </div>
    </section>
  )
}

export default Projects;

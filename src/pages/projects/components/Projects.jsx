import { useNavigate } from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import Footer from '../../../components/Footer';
import {projectsData} from '../helperFiles/projectsData';
import styles from '../cssModules/Projects.module.css';

const Projects = () => {  
  
  const navigate = useNavigate();
  
  const handlProjectClick = (project) => {    
    const dashIndex = project.projectId.indexOf('_') + 1;
    const projectTitle = project.projectId.substring(dashIndex);      
    navigate(`/projects/${projectTitle}`, { state: { project }} )
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.title}> PROJEKTI </div>      
      <div className={styles.projectsCardsContainer}>       
        {
          projectsData.map((project, index) => (
              <ProjectCard  key={index}
                            project = { project } 
                            handleProjectClick = {handlProjectClick}
              />          
          ))
        }    
      </div>  
      <Footer />       
  </div>
  )
}
export default Projects;
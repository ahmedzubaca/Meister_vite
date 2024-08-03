import { useNavigate } from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import MobileProjectsRender from './MobileProjectsRender';
import useWindowResize from '../helperFiles/windowWidth';
import Footer from '../../../components/Footer';
import {projectsData} from '../helperFiles/projectsData';
import styles from '../cssModules/Projects.module.css';

const Projects = () => {  
  
  const navigate = useNavigate();
  const windowSize = useWindowResize();
  //const isMobile = windowSize.windowWidth < 500 || ((windowSize.windowWidth >=500 &&  windowSize.windowWidth < 950) && windowSize.windowHeight < 500 )  ? true : false; 
  const isMobile = windowSize.windowWidth < 500;
  const isLandscape = (windowSize.windowWidth >=500 &&  windowSize.windowWidth < 950) && windowSize.windowHeight < 500 ;

  
  const handlProjectClick = (project) => {    
    const dashIndex = project.projectId.indexOf('_') + 1;
    const projectTitle = project.projectId.substring(dashIndex);      
    navigate(`/projects/${projectTitle}`, { state: { project }} )
  }

  return (
    <div className={`${styles.pageContainer} ${ isLandscape ? styles.pageContainerLandscape : ''}`}>
      <div className={`${styles.title} ${isLandscape ? styles.titleLandscape : '' }`}> PROJEKTI </div>      
      <div className= {`${styles.projectsCardsContainer} ${ isLandscape ? styles.projectsCardsContainerLandscape : ''}`}>       
        {          
          projectsData.map((project, index) => (
            isMobile ? 
            <MobileProjectsRender  key={index}
                                    project = { project } 
            />
            :
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
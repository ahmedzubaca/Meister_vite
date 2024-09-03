import { useNavigate } from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import useWindowResize from '../helperFiles/windowWidth';
import Footer from '../../../components/Footer';
import {projectsData} from '../helperFiles/projectsData';
import { useSpring, animated } from 'react-spring';
import { useMenu } from "../../../helperFunctions/MenueContext";
import styles from '../cssModules/Projects.module.css';
import PageTransition from '../../../helperFunctions/PageTransition';

const Projects = () => {  
  
  const navigate = useNavigate();
  const windowSize = useWindowResize();
  const isLandscape = (windowSize.windowWidth >=500 &&  windowSize.windowWidth < 950) && windowSize.windowHeight < 500 ;
  const { state } = useMenu();
  
  const moveDownUp = useSpring({    
    marginTop: state.isMenuOpened ? 220 : 100,    
    config: {
      tension: 170,
      friction: 26
    }
  });
  
  const handlProjectClick = (project) => {
    const dashIndex = project.projectId.indexOf('_') + 1;
    const projectTitle = project.projectId.substring(dashIndex);          
    navigate(`/projects/${projectTitle}`, { state: { project }} )
  }

  return (
    <PageTransition>
      <div className={`${styles.pageContainer} ${ isLandscape ? styles.pageContainerLandscape : null}`}>
        <animated.div style={window.innerWidth <= 900 ? moveDownUp : null} className={`${styles.title} ${isLandscape ? styles.titleLandscape : '' }`}> PROJEKTI </animated.div>      
        <div className= {`${styles.projectsCardsContainer} ${ isLandscape ? styles.projectsCardsContainerLandscape : ''}`}>       
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
    </PageTransition>
  )
}
export default Projects;
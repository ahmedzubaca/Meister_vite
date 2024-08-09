import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled, TbArrowBigLeftFilled  } from "react-icons/tb";
import Projects from './Projects';
import MobileProjectsRender from './MobileProjectsRender';
import LandscapeMobileProjectsRender from './LandscapeMobileProjectsRender';
import useWindowResize from '../helperFiles/windowWidth';
import { renderContent } from '../helperFiles/imageVideoRender';
import styles from '../cssModules/ProjectsDetails.module.css';
import PropTypes from 'prop-types';

const ProjectsDetails = () => {

  const { state } = useLocation();
  const project = state.project;
  const images = project.contentImages;
  const navigate = useNavigate();
  const [ slideIndex, setSlideIndex ] = useState(0);
  const windowSize = useWindowResize();
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  let arrowSize = windowSize.windowWidth > 900 ? 90 : windowSize.windowWidth > 700 ? 70 : 55;
   
  const handleBackButton = () => {
    navigate('/projects');
  }
  
  const handlePreviousArrow = () => {
    if(slideIndex > 0)
    setSlideIndex(prev => prev - 1)
  }

  const handleNextArrow = () => {
    if(slideIndex < images.length -1)
    setSlideIndex(prev => prev + 1)
  }

  const handleCircleClick = (number) => {
    setSlideIndex(number); 
  } 
  
  useEffect (() => {
    if(windowSize.windowWidth < 500) {
       setIsMobile(true);
       setIsLandscape(false);
    }
    else if((windowSize.windowWidth >=500 &&  windowSize.windowWidth < 950) && windowSize.windowHeight < 500) {
      setIsLandscape(true);
      setIsMobile(false);
    }
    else {
      setIsLandscape(false);
      setIsMobile(false)
    }    
  }, [windowSize])
 
  return (
    <>
      {
        isMobile ? 
          <MobileProjectsRender project={project} />
      : 
        isLandscape ?
          <LandscapeMobileProjectsRender project={project} />
        : 
        <>   
          <div className={styles.backgroundProjects}>
            <Projects />
          </div>             
          <div className={styles.pageContainer}>
            <div className={styles.buttonContainer}>
              <button className={styles.backButton}
                  onClick={handleBackButton}> <TbArrowBigLeftFilled /> PROJEKTI
              </button>
            </div>
            <div className={styles.projectCardContainer}>
              <div className={styles.projectInfo}>
                    <p> Lokacija: {project.location} </p>
                    <p> Investitor: {project.investor} </p>
                    <p> Površina: {project.size}  m<sup>2</sup></p>
              </div>
              <div className={styles.imageAndArrowsContainer}>
                <div className={styles.arrowIcons}>
                  <TbArrowBadgeLeftFilled className={`${slideIndex === 0 ? styles.arrowNext : ''}`}
                      size={arrowSize} 
                      onClick={handlePreviousArrow} />
                </div>      
                <div className={styles.imageContainer}>              
                  {
                    renderContent(images[slideIndex], styles.image, styles.video)
                  }              
                </div>
                <div className={styles.arrowIcons}> 
                  <TbArrowBadgeRightFilled className={`${slideIndex === images.length - 1 ? styles.arrowNext : ''}`} 
                      size={arrowSize} 
                      onClick={handleNextArrow} />
                </div>            
              </div>
              <div className={styles.circlesContainer} >
                {
                  images.map((slide, index) => (
                    <span key={index} 
                        className={`${styles.circle} ${styles.circleMargin} ${slideIndex === index ? styles.activeCircle : ''}`} 
                        onClick={() => handleCircleClick(index)}> </span>                
                  ))
                } 
              </div>             
            </div>
          </div>
        </>      
      }
    </>
  )
}
export default ProjectsDetails;

ProjectsDetails.propTypes = {
  selectedProject: PropTypes.any.isRequired,
  handleBackButton: PropTypes.any.isRequired
};
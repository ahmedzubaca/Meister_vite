import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled, TbArrowBigLeftFilled  } from "react-icons/tb";
import Projects from './Projects';
import useWindowResize from '../helperFiles/windowWidth';
import { renderContent } from '../helperFiles/imageVideoRender';
import styles from '../cssModules/ProjectsDetails.module.css';

const ProjectsDetails = () => {

  const { state } = useLocation();
  const project = state.project;
  const images = project.contentImages;  
  const [ slideIndex, setSlideIndex ] = useState(0);
  const [ sliderMob, setSliderMob] = useState(false);
  const touchStartX = useRef(null);
  const navigate = useNavigate();
  const windowSize = useWindowResize();
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
    if(number === images.length -1 || number === 0) setSliderMob(prev => !prev);
  } 

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;    
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;

    if (diff > 50 ) {
      handlePreviousArrow();
      setSliderMob(prev => !prev)
    }
    if (diff < -50 ) {
      handleNextArrow();
      setSliderMob(prev => !prev)
    }
    touchStartX.current = null;    
  };  

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
       
    return () => {      
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };    
  }, [sliderMob]); // eslint-disable-line react-hooks/exhaustive-deps   

  return (
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
  )
}
export default ProjectsDetails;
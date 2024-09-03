import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled } from "react-icons/tb";
import useWindowResize from '../helperFiles/windowWidth';
import { imageVideoRender } from '../helperFiles/imageVideoRender';
import styles from '../cssModules/ProjectsDetails.module.css';
import { motion } from 'framer-motion';

const ProjectsDetails = () => {

  const { state } = useLocation();
  const project = state.project;
  const imagesNormal = project.contentImages;
  const imagesLight = project.contentImagesLight  
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
    if(slideIndex < imagesLight.length -1)
    setSlideIndex(prev => prev + 1)
  }

  const handleCircleClick = (number) => {
    setSlideIndex(number);
    if(number === imagesLight.length -1 || number === 0) setSliderMob(prev => !prev);
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
        <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          exit={{opacity: 0.5, transition: {duration: 0.1}}}
          transition={{duration: 0.5}}
          className={styles.pageContainer}>
          <div className={styles.buttonContainer}>
            <button className={styles.backButton}
                onClick={handleBackButton}> NAZAD
            </button>
          </div>
          <div className={styles.projectCardContainer}>
            <div className={styles.projectInfo}>
                  <p> Lokacija: {project.location} </p>
                  <p> Investitor: {project.investor} </p>
                  <p> Površina: {project.size}  m<sup>2</sup></p>
            </div>
            <div className={styles.imageAndArrowsContainer}>
              <div className={styles.arrowContainer}>
                <TbArrowBadgeLeftFilled className={`${slideIndex === 0 ? styles.arrowHidden : styles.arrow}`}
                    size={arrowSize} 
                    onClick={handlePreviousArrow} />
              </div>      
              <div className={styles.imageContainer}> 
                {                
                  imageVideoRender(imagesLight[slideIndex], imagesNormal[slideIndex], styles.image)                  
                }      
              </div>
              <div className={styles.arrowContainer}> 
                <TbArrowBadgeRightFilled className={`${slideIndex === imagesLight.length - 1 ? styles.arrowHidden : styles.arrow}`} 
                    size={arrowSize} 
                    onClick={handleNextArrow} />
              </div>            
            </div>
            <div className={styles.circlesContainer} >
              {
                imagesLight.map((slide, index) => (
                  <span key={index} 
                      className={`${styles.circle} ${styles.circleMargin} ${slideIndex === index ? styles.activeCircle : ''}`} 
                      onClick={() => handleCircleClick(index)}> </span>
                ))
              } 
            </div>             
          </div>
        </motion.div>
      </div>
    </>
  )
}
export default ProjectsDetails;
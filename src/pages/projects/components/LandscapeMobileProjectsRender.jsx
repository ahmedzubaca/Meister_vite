import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBigLeftFilled  } from "react-icons/tb";
import Projects from './Projects';
import { renderContent } from '../helperFiles/imageVideoRender';
import styles from '../cssModules/LandscapeMobileProjectsRender.module.css';
import PropTypes from 'prop-types';

const LandscapeMobileProjectsRender = ({project}) => {   
  const touchStartX = useRef(null);
  const [ slideIndex, setSlideIndex ] = useState(0);
  const [ sliderMob, setSliderMob] = useState(false);  
  const images = project.contentImages;
  const navigate = useNavigate();  
  
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
  
  return(
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
          <div className={styles.imgContainer}>                    
            {
              renderContent(images[slideIndex], styles.image, styles.video )
            }              
            <div className={styles.dots}>
              {
                images.map((slide, index) => (
                  <span key = {index} 
                        className={`${styles.dot} ${slideIndex === index ? styles.active : ''}`}
                        onClick={() => handleCircleClick(index)}            
                  >              
                  </span>
                ))
              } 
            </div>
          </div>                
        </div>
      </div>
    </>       
  )
} 
export default LandscapeMobileProjectsRender;

LandscapeMobileProjectsRender.propTypes = {
  project: PropTypes.any.isRequired
};
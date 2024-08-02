import { useState, useRef, useEffect } from 'react';
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled } from "react-icons/tb";
import { renderContent } from '../helperFiles/imageVideoRender';
import useWindowResize from '../helperFiles/windowWidth';
import styles from '../cssModules/ProjectsCard.module.css';
import mobileStyles from '../cssModules/SingleProject.module.css';
import PropTypes from 'prop-types';

const MobileProjectsRender = ({project}) => {
  const windowSize = useWindowResize();
  const touchStartX = useRef(null);
  const [ slideIndex, setSlideIndex ] = useState(0);
  const [ sliderMob, setSliderMob] = useState(false);
  let arrowSize = windowSize.windowWidth > 900 ? 90 : windowSize.windowWidth > 700 ? 70 : 55;
  const images = project.contentImages;
  
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
    <div className={mobileStyles.overallContainer} >
      <div className={mobileStyles.titleSizeContainer}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
      >
        <h3> {project.title} </h3>
        <h4> {project.size}  m<sup>2</sup> </h4>
      </div>
      <div className={mobileStyles.imgContainer}>
      <TbArrowBadgeLeftFilled className={`${slideIndex === 0 ? styles.arrowNext : ''}`}
              size={arrowSize} 
              onClick={handlePreviousArrow}
      />               
      {
        renderContent(images[slideIndex], styles.image, styles.video )
      }            

      <TbArrowBadgeRightFilled className={`${mobileStyles.next} ${slideIndex < images.length - 1 ? mobileStyles.show : '' }`}
              size={40}
              onClick={handleNextArrow}
      />            
        <div className={styles.dots}>
            {
              images.map((slide, index) => (
                <span key = {index} 
                      className={`${mobileStyles.dot} ${slideIndex === index ? mobileStyles.active : ''}`}
                      onClick={() => handleCircleClick(index)}            
                >              
                </span>
              ))
            } 
        </div>
      </div>                
    </div>       
  )
} 
export default MobileProjectsRender;

MobileProjectsRender.propTypes = {
  project: PropTypes.any.isRequired
};
import { useState } from 'react';
import Footer from '../../../components/Footer'
import {projectsData} from '../helperFiles/projectsData';
import useWindowResize from '../helperFiles/windowWidth';
//import { useNavigate } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled, TbArrowBigLeftFilled  } from "react-icons/tb";
import styles from '../cssModules/Projects.module.css';

const Projects = () => {
  
  const [isSingleProject, setIsSingleProject] = useState(false);  
  const [selectedProject, setSelectedProject] = useState();
  const [images, setImages] = useState([]);
  const [ slideIndex, setSlideIndex ] = useState(0);
  const windowSize = useWindowResize();
  const [ sliderMob, setSliderMob] = useState(false);
  let arrowSize = windowSize.windowWidth > 900 ? 90 : windowSize.windowWidth > 700 ? 70 : 55; 
  
  const handlProjectClick = (project) => {
    setIsSingleProject(true);
    setSelectedProject(project);
    setImages(project.contentImages)    
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

  const getFileType = (filename) => {
    const extension = filename.split('.').pop();
    if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
      return 'image';
    } else if (['mp4', 'webm', 'ogg'].includes(extension)) {
      return 'video';
    }
    return null;
  };
  const renderContent = (filename) => {
    const fileType = getFileType(filename);
    if (fileType === 'image') {      
      return <img src={filename} alt='slika' className={styles.image} />;
    } else if (fileType === 'video') {      
      return (
        <video controls autoPlay className={styles.image} >
          <source src={filename} type={`video/${filename.split('.').pop()}`}  />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };

  return (
    <>
    <div className={styles.pageContainer}>          
      {
        windowSize.windowWidth > 700
        ?
        <div className= {styles.backgroundContainer} >
          <div className={styles.backgroundLeft}></div>
          <div className={styles.backgroundMiddle}></div>     
          <div className={styles.backgroundRight}></div>                
        </div>
        : null
      }         
      <div className={styles.projectsContainer}>      
        <div className={styles.title}> PROJEKTI </div>
        <div className={styles.allProjectsContainer}>       
          {
            projectsData.map((project, index) => (
                <ProjectCard  key={index}
                              project = { project } 
                              handleProjectClick = {handlProjectClick}
                />          
            ))
          }    
        </div>              
      </div>
        {
          windowSize.windowWidth > 700
          ?
          <div className={styles.footerContainer}>
            <Footer />
          </div>
        : null          
        }      
    </div>    
    {
      isSingleProject
      ? 
        <div className={styles.singleProjectOverAllContainer}>
          <div className={styles.buttonContainer}>
            <button className={styles.backButton}
                onClick={() => setIsSingleProject(false)}> <TbArrowBigLeftFilled /> PROJEKTI
            </button>
          </div>
          <div className={styles.projectCardContainer}>          
            <div className={styles.imageAndArrowsContainer}>
              <div className={styles.arrowIcons}>
                <TbArrowBadgeLeftFilled className={`${slideIndex === 0 ? styles.arrowNext : ''}`}
                    size={arrowSize} 
                    onClick={handlePreviousArrow} />
              </div>         
              <div className={styles.infoImageContainer}>
                <div className={styles.projectInfo}>
                  <p> Lokacija: {selectedProject.location} </p>
                  <p> Investitor: {selectedProject.investor} </p>
                  <p> Površina: {selectedProject.size}</p>
                </div>
                <div className={styles.imageContainer}>              
                  {
                    renderContent(images[slideIndex])
                  }
                </div>
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
      : null
    } 
    <div className={styles.footer}>      
    </div>       
  </>
  )
}
export default Projects;
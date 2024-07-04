import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../cssModules/ProjectsCard.module.css'

export const ProjectCard = ({project, handleProjectClick}) => { 

  const [isHover, setIsHover] = useState(false)  
  
  return(
    <>     
      <div  className={styles.overallContainer}> 
        <div className={styles.cardContainer}>        
          <div className={styles.imgContainer}>
            <img src={project.coverImage} alt='slika'              
                className={`${styles.projectImg} ${isHover ? styles.projectImgHovered : ''}`}
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            /> 
            {
            isHover 
            ? 
              <div className={styles.learnMore}
                  onClick={() => handleProjectClick(project)}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
              > SAZNAJ VIŠE </div>
            : null
          }          
          </div>
          <div className={`${styles.projectInfo} ${isHover ? styles.projectInfoHovered : ''}`} 
              onClick={() => handleProjectClick(project)}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
          > 
            <p className={styles.projectTitle}> {project.title} </p>
            <p className={styles.projectSize}> {project.size}  </p>
          </div>    
        </div>        
      </div>           
    </>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.any.isRequired,    
  styles: PropTypes.any.isRequired,
  imgHeight: PropTypes.any.isRequired,
  handleProjectClick: PropTypes.any.isRequired,
};
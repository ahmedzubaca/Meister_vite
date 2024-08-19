import { useState } from 'react';
import styles from '../cssModules/ProjectsCard.module.css';
import PropTypes from 'prop-types';

const ProjectCard = ({project, handleProjectClick}) => { 

  const [isHover, setIsHover] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);

  return( 
    <div  className={styles.overallContainer}> 
      <div className={styles.cardContainer}>        
        <div className={styles.imgContainer}>
        <img src={project.coverImageLight} alt='slika'              
              className={`${styles.projectImg} ${isHover ? styles.projectImgHovered : ''}`}
              style={{display: isLoaded ? 'none' : 'grid'}}
              onLoad={() => setIsLoaded(true)}
              onClick={() => handleProjectClick(project)}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
          /> 
          <img src={project.coverImage} alt='slika'              
              className={`${styles.projectImg} ${isHover ? styles.projectImgHovered : ''}`}
              style={{display: isLoaded ? 'grid' : 'none'}}
              onLoad={() => setIsLoaded(true)}
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
          <p className={styles.projectSize}> {project.size} m<sup>2</sup>  </p>
        </div>    
      </div>        
    </div>       
  )
} 
export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.any.isRequired,
  handleProjectClick: PropTypes.any.isRequired
};
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../cssModules/CustomLink.module.css';

const CustomLink = ({ navItem, togleMenu, handleNavBarBackground }) => { 
   
  const resolvedPath = useResolvedPath(navItem.route);
  const isActive = useMatch({ path: resolvedPath.pathname, end: navItem.route === "/" ? true : false }); 

  const handleLinkClick = () => {    
    handleNavBarBackground(false);
    window.scrollTo(0,0)
    togleMenu();    
  } 
 
  return (  
    <li className={styles.menuItem}>       
      <Link to={navItem.route} 
        className={`${styles.menuItemLink} ${isActive ? styles.active : ""} `}
        onClick={handleLinkClick}            
      >
        {navItem.name}
      </Link>      
    </li>           
  )
}

CustomLink.propTypes = {
  navItem: PropTypes.any.isRequired,
  togleMenu: PropTypes.any.isRequired,
  handleNavBarBackground: PropTypes.any.isRequired
};

export default CustomLink;
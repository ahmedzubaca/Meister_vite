import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../cssModules/CustomLink.module.css';

const CustomLink = ({ navItem, togleMenu }) => { 
   
  const resolvedPath = useResolvedPath(navItem.route);
  const isActive = useMatch({ path: resolvedPath.pathname, end: navItem.route === "/" ? true : false }); 
 
  return (  
    <li className={styles.menuItem}>       
      <Link to={navItem.route} 
        className={`${styles.menuItemLink} ${isActive ? styles.active : ""} `}
        onClick={togleMenu}            
      >
        {navItem.name}
      </Link>      
    </li>           
  )
}

CustomLink.propTypes = {
  navItem: PropTypes.any.isRequired,
  togleMenu: PropTypes.any.isRequired
};

export default CustomLink;
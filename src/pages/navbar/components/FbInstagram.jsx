import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from '../cssModules/FbInstagram.module.css'

const FbInstagram = () => {
  
  return(
    <>
      <a 
        href="https://www.facebook.com/meisterdoo/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.facebook}
      >
        <FaFacebook />
      </a>
      <a 
        href="https://www.facebook.com/meisterdoo/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.instagram}
      >
        <FaInstagram />
      </a>
    </>
  )
}
export default FbInstagram;

import Counter from './Counter';
import styles from '../css_modules/ReferenceLogos.module.css';
import {referenceLogosData} from '../helper/referenceLogosData';

function ReferenceLogos() {
  
  return(
    <div className={styles.overallContainer}>
      <Counter /> 
      <div className={styles.logosContainer} >        
        {
          referenceLogosData.map((logo, index) => (
            <div key={index}
                className={styles.oneLogoContainer}> 
              <img src={logo} alt='logo' 
              className={styles.logo}/>
            </div>                             
          ))
        }
      </div> 
    </div>
  )
}
export default ReferenceLogos;
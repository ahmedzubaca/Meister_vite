import ReferenceLogos from '../home/components/ReferenceLogos'
import Footer from '../../components/Footer';
import { useMenu } from "../../helperFunctions/MenueContext";
import { useSpring, animated } from 'react-spring';
import styles from '../home/css_modules/Services.module.css'
import {servicesCardsData} from '../home/helper/servicesCardData';

const About = () => {

  const { state } = useMenu();
  
  const moveDownUp = useSpring({    
    marginTop: state.isMenuOpened ? 220 : 80,    
    config: {
      tension: 170,
      friction: 26
    }
  });
  
  return (
    <>
      <div className={styles.overallContainer} >
        <animated.div style={window.innerWidth <= 900 ? moveDownUp : null} className={styles.contentContainer}>
          <div className={styles.titleDiv}> VAŠA FIRMA ZA SVE</div>
          <div className={styles.servicesContainer}>         
            {
              servicesCardsData.map((service) => (
                <div className={styles.cardContainer} key={service.Id}>
                  <div className={styles.iconContainer}>
                    <img src={service.icon}  alt='icon' 
                        className={styles.icon}/>
                  </div>
                  <div className={styles.serviceTitle}>
                    <h3> {service.title} </h3>
                    <h3> {service.subtitle} </h3>
                  </div>
                  <div className={styles.serviceDescription}> {service.text} </div>
                </div>
              ))
            }          
          </div> 
        </animated.div>     
      </div>
      <ReferenceLogos />      
      <Footer />       
    </>
  )
} 
export default About;
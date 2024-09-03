import Services from '../home/components/Services';
import ReferenceLogos from '../home/components/ReferenceLogos'
import Footer from '../../components/Footer';
import { useMenu } from "../../helperFunctions/MenueContext";
import { useSpring, animated } from 'react-spring';
import styles from './about.module.css';
import PageTransition from '../../helperFunctions/PageTransition';

const About = () => {

  const { state } = useMenu();
  const moveDownUp = useSpring({    
    paddingTop: state.isMenuOpened ? 220 : 50,    
    config: {
      tension: 170,
      friction: 26
    }
  });
  
  return (
    <PageTransition>
      <div className={styles.servicesBackground}>
        <div className={styles.bufferDiv}></div>        
        <animated.div style={window.innerWidth <= 900 ? moveDownUp : null} className={styles.contentContainer}>        
          <Services />        
        </animated.div>
      </div>
      <ReferenceLogos />      
      <Footer />           
    </PageTransition>
  )
} 
export default About;
import Services from '../home/components/Services';
import ReferenceLogos from '../home/components/ReferenceLogos'
import Footer from '../../components/Footer';
import { useMenu } from "../../helperFunctions/MenueContext";
import { useSpring, animated } from 'react-spring';
import styles from './about.module.css';
import PageTransition from '../../helperFunctions/PageTransition';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title> O nama </title>
        <meta name='description' 
              content='Meister d.o.o. je primarno orjentisan na brzu i kvalitetnu izgradnju ali jednako kvalitetno nudi
                       rješenja za arhitektonske i statičke projekte kao i profesionalnu pomoć u prodaji nekretnina.' />
        <link rel='canonical' href='/about' />
      </Helmet>
    
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
    </>
  )
} 
export default About;
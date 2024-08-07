import { useState, useEffect, useRef } from "react";
import Logo from '../icons/meister-logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from '../cssModules/Navbar.module.css';
import { navItems} from '../helper/navItems';
import CustomLink from "./CustomLink";
import { useSpring, animated } from 'react-spring';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import {Link} from 'react-router-dom';


const Navbar = () => {

  const [isMenuOpened, setIsMenuOpened] = useState(window.innerWidth <= 900 ? false : true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHidden, setIsHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false)
  const {scrollY} = useScroll();
  const lastYRef = useRef(0);  

  const togleMenu = () => {   
      setIsMenuOpened(curent => !curent)
  }  

  const springProps = useSpring({
    opacity: isMenuOpened ? 1 : 0,
    marginTop: isMenuOpened ? 20 : -50,    
    config: {
      tension: 170,
      friction: 26
    }
  });
  
  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      const scrollingDown = difference > 0;
      setIsHidden(scrollingDown);
      if (y < 50) {
        setHasBackground(false);
      } else {
        setHasBackground(!scrollingDown);
      }
      lastYRef.current = y;
    }      
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if(window.innerWidth > 900) {
        setIsMenuOpened(true);
      } else {
        setIsMenuOpened(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  return (
    <nav className={`${styles.container} ${hasBackground ? styles.containerBackground : ''}`} > 
    {
      windowWidth <= 900
      ? 
      <> 
        <motion.div
          animate={isHidden ? 'hidden' : 'visble'}
          variants={{
            hidden: {
              y: '-150%',
            },
            visible: {
              y: '0%',
            }
          }}
          transition={{ duration: 0.1 }}
          className={styles.logoMenueMediaContainer}
        >  
          <div className={styles.menuContainer}>            
            <AiOutlineMenu className={styles.menue} onClick={togleMenu}  />
          </div>
          <div className={styles.logoContainer}>
          <Link to='/'>
            <img className={styles.logo} src={Logo} alt="logo" />
          </Link> 
          </div> 
          <div className={styles.socialMediaContainer}>
            <FaFacebook className={styles.facebook} /> 
            <FaInstagram className={styles.instagram} />
          </div>
        </motion.div>
        <animated.ul
          style={springProps}
          className={isMenuOpened ? styles.linksContainerOnMenueClick :  styles.menuClosed}          
          >
          {
            navItems.map((item, index) => (
              <CustomLink key={index} 
                          navItem={item}
                          togleMenu={togleMenu}
                          className={isMenuOpened ? styles.menuClosed : ''} />
            ))
          }
        </animated.ul>
        </>       
        :
        <motion.div
          animate={isHidden ? 'hidden' : 'visble'}
          variants={{
            hidden: {
              y: '-100%',
            },
            visible: {
              y: '0%',
            }
          }}
          transition={{ duration: 0.1 }}
          className={styles.logoMenueMediaContainer}
        >
          <div className={styles.logoContainer}>
          <Link to='/'>
            <img className={styles.logo} src={Logo} alt="logo" /> 
          </Link>
          </div>
          <ul className={styles.linksContainer}>
          {
            navItems.map((item, index) => (
              <CustomLink key={index} navItem={item} />
            )) 
          }
          </ul> 
          <div className={styles.socialMediaContainer}>
            <FaFacebook className={styles.facebook} /> 
            <FaInstagram className={styles.instagram} />
          </div>
        </motion.div>     
      }      
    </nav> 
  )
} 
export default Navbar;
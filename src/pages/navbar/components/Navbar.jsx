import { useState, useEffect, useRef } from "react";
import Logo from '../icons/meister-logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from '../cssModules/Navbar.module.css';
import { navItems} from '../helper/navItems';
import CustomLink from "./CustomLink";
import { useMenu } from "../../../helperFunctions/MenueContext";
import { motion, useMotionValueEvent, useScroll, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import {Link} from 'react-router-dom';


const Navbar = () => {

  const {state, dispatch} = useMenu();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHidden, setIsHidden] = useState(false);
  const [hasBackground, setHasBackground] = useState(false)
  const {scrollY} = useScroll();
  const lastYRef = useRef(0);  

  const togleMenu = () => {   
      dispatch({type: 'TOGGLE_MENU'});                
  }

  const handleNavBarBackground = (fromLink) => {    
    setHasBackground(fromLink)
    window.scrollTo(0, 0)
  }

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
      if(!hasBackground)
      lastYRef.current = y;
    }      
  });

  const y = useMotionValue(-50);
  const opacity = useTransform(y, [-80, -30, 0, 10], !hasBackground ? [0, 0, 0.5, 1] : [0, 0, 1, 1] );
  const menuVars = {
    initial: {
      y: -40,     
    },
    animate: {
      y: hasBackground ? 0 : 10,      
      transition: {
        duration: 0.5,        
      },
    },
    exit: {
      y: -80,      
      transition: {        
        duration: 0.6,        
      },
    },
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if(window.innerWidth > 900) {
        dispatch({type: 'TRUE'});
      } else {
        dispatch({type: 'FALSE'});
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
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
            <AiOutlineMenu className={styles.menu} onClick={togleMenu}  />
          </div>
          <div className={styles.logoContainer}>
          <Link to='/'>
            <img className={styles.logo} src={Logo} alt="logo"
              onClick={() => handleNavBarBackground(false)} 
            />
          </Link> 
          </div> 
          <div className={styles.socialMediaContainer}>
            <FaFacebook className={styles.facebook} /> 
            <FaInstagram className={styles.instagram} />
          </div>
        </motion.div>
        <AnimatePresence initial={false}>
          {
            state.isMenuOpened && (
              <motion.ul
                style={{ y, opacity }}
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`${state.isMenuOpened ? styles.linksContainerOnMenueClick :  styles.menuClosed} ${
                  state.isMenuOpened && hasBackground ? styles.linksContainerOnMenueClickBackground : ''
                  }`}          
                >
                {
                  navItems.map((item, index) => (
                    <CustomLink key={index} 
                                navItem={item}
                                togleMenu={togleMenu}
                                handleNavBarBackground={handleNavBarBackground}
                                className={state.isMenuOpened ? styles.menuClosed : ''} />
                  ))
                }
              </motion.ul>
            )
          }
        </AnimatePresence>       
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
            <img className={styles.logo} src={Logo} alt="logo" 
              onClick={() => handleNavBarBackground(false)}
            /> 
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
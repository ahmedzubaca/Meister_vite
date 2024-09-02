import TitlePage from './TitlePage';
import Footer from '../../../components/Footer';
import Services from './Services';
import ReferenceLogos from './ReferenceLogos';
import { motion } from 'framer-motion';
import styles from '../css_modules/Home.module.css';

function Home() {
  
  return (    
    <>
      <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}}
        exit={{opacity: 0.5, transition: {duration: 0.1}}}
        transition={{duration: 0.5}}               
      >
        <TitlePage />
        <div className={styles.servicesBackground}>
          <Services />
        </div> 
        <ReferenceLogos />
        <Footer /> 
      </motion.div> 
    </> 
    
  )
} 
export default Home;
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
        className={styles.overallContainer}>
          <div className={styles.textDiv}>          
              <p className= {styles.textSpanSmall}> Naša garancija je </p>
              <p className={styles.textSpanCapital}> ROK I KVALITET </p>
              <p className= {styles.textSpanSmall}> u svemu što radimo </p>            
        </div>      
      </motion.div> 
      <Services /> 
      <ReferenceLogos />
      <Footer />
    </> 
    
  )
} 
export default Home;
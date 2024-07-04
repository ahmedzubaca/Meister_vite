import Footer from '../../../components/Footer';
import Services from './Services';
import ReferenceLogos from './ReferenceLogos';
import styles from '../css_modules/Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.overallContainer}>
          <div className={styles.textDiv}>          
              <p className= {styles.textSpanSmall}> Naša garancija je </p>
              <p className={styles.textSpanCapital}> ROK I KVALITET </p>
              <p className= {styles.textSpanSmall}> u svemu što radimo </p>            
        </div>      
      </div> 
      <Services /> 
      <ReferenceLogos />
      <Footer />
    </> 
  )
} 
export default Home;
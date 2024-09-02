import styles from '../css_modules/TitlePage.module.css';

function TitlePage() {
  return ( 
    <div className={styles.overallContainer}>   
      <div className={styles.textDiv}>          
          <p className= {styles.textSpanSmall}> Naša garancija je </p>
          <p className={styles.textSpanCapital}> ROK I KVALITET </p>
          <p className= {styles.textSpanSmall}> u svemu što radimo </p>            
      </div>
    </div> 
  )
} 
export default TitlePage;
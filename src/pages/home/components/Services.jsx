import styles from '../css_modules/Services.module.css';
import {servicesCardsData} from '../helper/servicesCardData';

function Services() {
  
  return(    
      <div className={styles.contentContainer}>
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
      </div>
  )
}
export default Services;
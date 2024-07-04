import {Link} from 'react-router-dom';
import {MdOutlineArrowCircleUp} from 'react-icons/md'
import styles from './futer.module.css'

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <footer className={styles.futerContainer}>
      <div className={styles.futerContentContainer}>
        <div className={styles.menuContainer}>          
          <h4>Adresa</h4>
          <p> Meister d.o.o.<br/>              
              Uglješići 5j, 71230 Vogošća <br/>
              Sarajevo, Bosna i Hercegovina
          </p>                    
        </div>
        <div className={styles.menuContainer}>          
          <h4>Info</h4>            
          <p> 
            ID: 4209842520003<br/>
              PDV: 209842520003<br/>
              Raiffeisen Bank d.d.<br/>
              TR: 1610 2500 2142 0072
          </p>
        </div>
        <div className={styles.menuContainer}>          
          <h4>Kontakt</h4>            
          <p> E-mailinfo@meister.ba<br/>
              Telefon: +387(0)33/878-210 <br/>
              Fax: +387(0)33/877-153
          </p>
        </div>
        <div className={styles.menuContainer}>          
          <h4>Meni</h4>
          <Link to='/' onClick={scrollTop}>Početna </Link>
          <Link to='/projects' onClick={scrollTop}> Projekti </Link>
          <Link to='/about' onClick={scrollTop}> O nama </Link>                    
          <Link to='/contact' onClick={scrollTop}> Kontakt </Link>          
        </div>
      </div>
      <div  className={styles.scrollToTopDiv} 
            onClick={scrollTop}
      >
        <MdOutlineArrowCircleUp className={styles.goToTopIcon} />
      </div>           
      <div className={styles.disclaimer}>
        © 2019 Meister d.o.o. All Rights Reserved.
      </div> 
    </footer>
  )
}
export default Footer;
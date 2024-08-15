import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import styles from './contact.module.css';
import { useMenu } from '../../helperFunctions/MenueContext';

const Contact = () => {

  const initUserInfo = { 
    firstName: '',   
    lastName: '',
    email: '',
    message: ''
  }
    
  const { state } = useMenu();
  const [userInfo, setUserInfo] = useState(initUserInfo);  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);

  const moveDownUp = useSpring({    
    marginTop: state.isMenuOpened ? 250 : 100,    
    config: {
      tension: 170,
      friction: 26
    }
  });
  
  const clearUserInfo = () => {
    if(formRef.current !== null) {
      formRef.current.reset()
    }    
  }

  const notify = (message) => {
    toast(message);    
  }

  const handleUserInfo = () => {
    if(firstNameRef.current !== null && lastNameRef.current !== null
       && emailRef.current !== null && messageRef.current !== null) {
        setUserInfo({
          ...userInfo,  firstName: firstNameRef.current.value,
                        lastName: lastNameRef.current.value,
                        email: emailRef.current.value,
                        message: messageRef.current.value
        })
    }      
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {firstName, lastName, email, message} = userInfo;
    if(firstName !== '' && lastName !== '' && email !== '' && message !== '') {
      const templateParams = {
        from_name: firstName + ' ' + lastName,
        from_email: email,
        to_name: 'merjema.website',
        message: message,
        reply_to: email
      }

      emailjs.send(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEID, templateParams, import.meta.env.VITE_PUBLICKEY)
      .then((response) => {       
        if( response.status === 200 ) {                   
          notify('Poruka uspješno poslana');
          clearUserInfo();
        }
      }, () => {        
        notify('Greška servera, molimo za nekoliko trenutaka pokušajte ponovo!');
      });
      
    } else {
      notify('Molimo popunite sva polja!');
    }
  }

  return(        
    <motion.div
      initial={{opacity: 0}} 
      animate={{opacity: 1}}
      exit={{opacity: 0.5, transition: {duration: 0.1}}}
      transition={{duration: 0.5}} 

      className={styles.pageContainer}
    >      
      <animated.div style={window.innerWidth <= 900 ? moveDownUp : null} className={styles.overallContactContainer}> 
        <div className={styles.addressContainer}>
          <div>
            <h5>Adresa:</h5>
            <p> Uglješići 5j, 71320 Vogošća </p>
            <p> Sarajevo </p> 
            <p> Bosna i Hercegovina </p>              
          </div>
          <div> 
            <h5>Kontakt:</h5>  
            <p>Telefon: +387 (0)33 878 210</p>
            <p> Fax: +387 (0)33 878 153</p>
            <p>E-mail: info@meister.ba</p>
          </div>          
        </div> 
        <div className={styles.mapContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10541.558246144192!2d18.33570866203796!3d43.89787913746111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cd0cc361bb0d%3A0x850175cb9dd85b29!2sMeister%20d.o.o.%20Sarajevo!5e1!3m2!1sbs!2sba!4v1723736598980!5m2!1sbs!2sba"
            
            allowfullscreen=""            
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
           >            
           </iframe>
        </div> 
        <div className={styles.formContainer}>            
          <form ref={formRef} 
                method='POST'
                onSubmit={handleSubmit}
          >          
            <div className={styles.userDataContainer}>
              <div className={styles.contactNote}> Kontaktirajte nas: </div>                      
              <input type='text' id='fname' 
                      placeholder='Ime (obavezno)'                   
                      ref={firstNameRef}                                 
              />            
              <input type='text' id='lname' 
                    name='lastName' placeholder='Prezime (obavezno)'                  
                    ref={lastNameRef} 
              />
              <input type='email' id='email' 
                    name='email' placeholder='E-mail (obavezno)'                   
                    ref={emailRef}
              />            
            </div> 
            <div className={styles.messageButtonContainer}>         
              <textarea className={styles.messageContainer}
                        name='message' 
                        id='message'
                        placeholder='Poruka'                    
                        ref={messageRef}
              >
              </textarea>            
              <button className={styles.submitButton} 
                      type='submit'
                      onClick={handleUserInfo}
              >
                        Pošalji
              </button>            
            </div>          
          </form>
        </div>
        <ToastContainer/>          
      </animated.div> 
      <Footer /> 
    </motion.div>    
  )
}
export default Contact;
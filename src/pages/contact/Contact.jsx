import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../../components/Footer';
//import GoogleMapReact from 'google-map-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import styles from './contact.module.css';

const Contact = () => {

  const initUserInfo = { 
    firstName: '',   
    lastName: '',
    email: '',
    message: ''
  }
    
  const [userInfo, setUserInfo] = useState(initUserInfo);   
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);
  // const CompanyLocation = ({text}) => <div>{text}</div>;
  // const mapCenter = {
  //   center: {
  //     lat: 43.90178488252929,
  //     lng: 18.336620744520634
  //   },
  //   zoom: 11
  // };
  
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
       
      <div className={styles.pageContainer}>      
        <div className={styles.overallContactContainer}> 
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
          <div className={styles.mapContainer}> mapa </div> 
          <div className={styles.formContainer}>            
            <form 
                  ref={formRef} 
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
          
        </div> 
        <Footer /> 
      </div>
    
  )
}
export default Contact;
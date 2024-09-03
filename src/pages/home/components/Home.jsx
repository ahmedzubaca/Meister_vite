import TitlePage from './TitlePage';
import Footer from '../../../components/Footer';
import Services from './Services';
import ReferenceLogos from './ReferenceLogos';
import styles from '../css_modules/Home.module.css';
import PageTransition from '../../../helperFunctions/PageTransition';

function Home() {
  
  return (
    <PageTransition>
      <TitlePage />
      <div className={styles.servicesBackground}>
        <Services />
      </div> 
      <ReferenceLogos />
      <Footer /> 
    </PageTransition>
  )
} 
export default Home;
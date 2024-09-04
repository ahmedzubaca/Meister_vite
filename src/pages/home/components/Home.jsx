import TitlePage from './TitlePage';
import Footer from '../../../components/Footer';
import Services from './Services';
import ReferenceLogos from './ReferenceLogos';
import styles from '../css_modules/Home.module.css';
import PageTransition from '../../../helperFunctions/PageTransition';
import { Helmet } from 'react-helmet-async';

function Home() {
  
  return (
    <>
      <Helmet>
          <title> Meister d.o.o. </title>
          <meta name='description' 
                content='Meister d.o.o. je primarno orjentisan na brzu i kvalitetnu izgradnju ali jednako kvalitetno nudi
                        rješenja za arhitektonske i statičke projekte kao i profesionalnu pomoć u prodaji nekretnina.' />
          <link rel='canonical' href='/' />
        </Helmet>
      <PageTransition>
        <TitlePage />
        <div className={styles.servicesBackground}>
          <Services />
        </div> 
        <ReferenceLogos />
        <Footer /> 
      </PageTransition>
    </>
  )
} 
export default Home;
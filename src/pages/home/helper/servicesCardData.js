import projecting from '../images/servicesIcons/projecting.png';
import rohBau from '../images/servicesIcons/rohBau.png';
import kljucURuke from '../images/servicesIcons/kljucURuke.png';
import prodaja from '../images/servicesIcons/prodaja.png';

export const servicesCardsData = 
  [
    {
      Id: 's1_projektovanje',
      title: 'PROJEKTOVANJE I REVIZIJA',
      subtitle: 'arhitektura i statika',
      text: 'Naš tim stručnih inžinjera specijaliziran je za pružanje sveobuhvatnih rješenja ' + 
            'za arhitektonske i statičke projekte, baveći se svime, od detaljnih arhitektonskih '+ 
            'dizajna do robusnih strukturnih analiza s naglaskom na kvalitetu i inovacije kako bi ' +
            'se osiguralo da vaš projekat bude dovršen prema najvišim standardima.',
      icon: projecting,      
    },
    {
      Id: 's2_rohBau',
      title: 'ROH BAU',
      subtitle: '',
      text: 'Naša firma se ističe od konkurencije svojom predanošću, brzom i kvalitetnom izgradnjom, ' + 
            'osiguravajući da se vaš projekat izvrši učinkovito bez žrtvovanja kvalitete. Prioritet nam je '+ 
            'brzina bez kompromisa sa visokim standardima, pružajući usluge vrhunske kvalitete koja ' +
            'premašuje očekivanja.',
      icon: rohBau,      
    },
    {
      Id: 's3_ključURuke',
      title: 'KLJUČ U RUKE',
      subtitle: '',
      text: 'Prepustite nam sve faze izgradnje, od iskopa da predaje ključa. Mi vam osiguravamo ' + 
            'profesionalan i kvalitetan rad, upotrebu i ugradnju visokokvalitetnih materijala, '+ 
            'po najboljem omjeru cijena i kvaliteta. S predanošću izvrsnosti, pružamo vrhunske ' +
            'rezultate koji će premašiti vaša očekivanja.',
      icon: kljucURuke,      
    }, 
    {
      Id: 's4_prodaja',
      title: 'PRODAJA NEKRETNINA',
      subtitle: '',
      text: 'Naši licencirani agenti za prodaju spremni su pomoći investitorima u prodaji nekretnina. ' + 
            'Kada se odlučite graditi s nama, ne samo da dobijate vrhunsku uslugu izgradnje, već i '+ 
            'stručnu podršku u prodaji vaše nekretnine. Naši agenti za nekretnine posjeduju duboko ' +
            'razumijevanje tržišta i iskustvo u prodaji nekretnina.',
      icon: prodaja,      
    }
  ]
import p1_cover from '../images/p1_fasadaPotocari/p1_cover.jpg';
import p11 from '../images/p1_fasadaPotocari/p11.jpg';
import p12 from '../images/p1_fasadaPotocari/p12.jpg';
import p13 from '../images/p1_fasadaPotocari/p13.jpg';
// import p14_video  from '../images/p1_fasadaPotocari/p14_video.mp4'; 
import p2_cover from '../images/p2_kiseljakBarFloor/p2_cover.jpg';
import p21 from '../images/p2_kiseljakBarFloor/p21.jpg';
import p22 from '../images/p2_kiseljakBarFloor/p22.jpg';
import p23 from '../images/p2_kiseljakBarFloor/p23.jpg';
import p24 from '../images/p2_kiseljakBarFloor/p21.jpg';
import p3_cover from '../images/p3_krovPotocari/p3_cover.jpg';
import p31 from '../images/p3_krovPotocari/p31.jpg';
import p32 from '../images/p3_krovPotocari/p32.jpg';
//import p33_video from '../images/p3_krovPotocari/p33_video.mp4';
import p4_cover from '../images/p4_novaVogosca/p4_cover.png';
import p41 from '../images/p4_novaVogosca/p41.png';
import p42 from '../images/p4_novaVogosca/p42.png';
import p5_cover from '../images/p5_viaPax/p5_cover.jpg';
import p51 from '../images/p5_viaPax/p51.jpg';
import p52 from '../images/p5_viaPax/p52.png';
//import p53_video from '../images/p5_viaPax/p53_video.mp4';
//import p54_video from '../images/p5_viaPax/p54_video.mp4';
import p6_cover from '../images/p6_villaVerdeVogosca/p6_cover.jpg';
import p61 from '../images/p6_villaVerdeVogosca/p61.jpg';
//import p62_video from '../images/p6_villaVerdeVogosca/p62_video.mp4';

export const projectsData = 
  [
    {
      projectId: 'p1_fasadaPotocari',
      title: 'FASADA POTOČARI',
      location: 'Potočari',
      investor: 'TIKA',
      size: '',
      coverImage: p1_cover,
      contentImages: [p1_cover, p11, p12, p13]
      // video: p14_video 
    },      
    {
      projectId: 'p2_kiseljakBarFloor',
      title: 'Kiseljak bar floor',
      location: 'Kiseljak',
      investor: 'BAR FLOR d.o.o.',
      size: '16 000 m',
      coverImage: p2_cover,
      contentImages: [p2_cover,p21, p22, p23, p24],
      video:''      
    },  
    {
      projectId: 'p3_krovPotocari',
      title: 'KROV POTOČARI',
      location: 'Potočari',
      investor: 'TIKA',
      size: '16 500 m',
      coverImage: p3_cover,
      contentImages: [p3_cover, p31, p32],
      //video: p33_video      
    },  
    {
      projectId: 'p4_novaVogosca',
      title: 'NOVA VOGOŠĆA',
      location: 'VOGOŠĆA',
      investor: 'NOVA VOGOŠĆA d.o.o.',
      size: '20 000 m',
      coverImage: p4_cover,
      contentImages: [p4_cover, p41, p42],
      video:''             
    },
    {
      projectId: 'p5_viaPax',
      title: 'VIA PAX',
      location: 'LOKACIJA',
      investor: 'INVESTITOR',
      size: '3 800 m',
      coverImage: p5_cover,
      contentImages: [p5_cover, p51, p52]
      //video: p53_video      
    },  
    {
      projectId: 'p6_villaVerdeVogosca',
      title: 'VILLA VERDE',
      ocation: 'Vogošća',
      investor: 'INVESTITOR',
      size: '3 500 m',
      coverImage: p6_cover,
      contentImages: [p6_cover, p61],
      //video: p62_video     
    }    
  ]
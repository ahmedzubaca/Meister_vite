import p1_cover from '../images/p1_fasadaPotocari/normal/p1_cover.jpg';
import p11 from '../images/p1_fasadaPotocari/normal/p11.jpg';
import p12 from '../images/p1_fasadaPotocari/normal/p12.jpg';
import p13 from '../images/p1_fasadaPotocari/normal/p13.jpg';
// import p14_video  from '../images/p1_fasadaPotocari/p14_video.mp4'; 
import p2_cover from '../images/p2_kiseljakBarFloor/normal/p2_cover.jpg';
import p21 from '../images/p2_kiseljakBarFloor/normal/p21.jpg';
import p22 from '../images/p2_kiseljakBarFloor/normal/p22.jpg';
import p23 from '../images/p2_kiseljakBarFloor/normal/p23.jpg';
import p24 from '../images/p2_kiseljakBarFloor/normal/p21.jpg';
import p3_cover from '../images/p3_krovPotocari/normal/p3_cover.jpg';
import p31 from '../images/p3_krovPotocari/normal/p31.jpg';
import p32 from '../images/p3_krovPotocari/normal/p32.jpg';
//import p33_video from '../images/p3_krovPotocari/p33_video.mp4';
import p4_cover from '../images/p4_novaVogosca/normal/p4_cover.png';
import p41 from '../images/p4_novaVogosca/normal/p41.png';
import p42 from '../images/p4_novaVogosca/normal/p42.png';
import p5_cover from '../images/p5_viaPax/normal/p5_cover.jpg';
import p51 from '../images/p5_viaPax/normal/p51.jpg';
import p52 from '../images/p5_viaPax/normal/p52.jpg';
//import p53_video from '../images/p5_viaPax/p53_video.mp4';
//import p54_video from '../images/p5_viaPax/p54_video.mp4';
import p6_cover from '../images/p6_villaVerdeVogosca/normal/p6_cover.jpg';
import p61 from '../images/p6_villaVerdeVogosca/normal/p61.jpg';
//import p62_video from '../images/p6_villaVerdeVogosca/p62_video.mp4';

import p1_cover_l from '../images/p1_fasadaPotocari/light/p1_cover_l.jpg';
import p11_l from '../images/p1_fasadaPotocari/light/p11_l.jpg';
import p12_l from '../images/p1_fasadaPotocari/light/p12_l.jpg';
import p13_l from '../images/p1_fasadaPotocari/light/P13_l.jpg';
// import p14_video  from '../images/p1_fasadaPotocari/p14_video.mp4'; 
import p2_cover_l from '../images/p2_kiseljakBarFloor/light/p2_cover_l.jpg';
import p21_l from '../images/p2_kiseljakBarFloor/light/p21_l.jpg';
import p22_l from '../images/p2_kiseljakBarFloor/light/p22_l.jpg';
import p23_l from '../images/p2_kiseljakBarFloor/light/p23_l.jpg';
import p24_l from '../images/p2_kiseljakBarFloor/light/p21_l.jpg';
import p3_cover_l from '../images/p3_krovPotocari/light/p3_cover_l.jpg';
import p31_l from '../images/p3_krovPotocari/light/p31_l.jpg';
import p32_l from '../images/p3_krovPotocari/light/p32_l.jpg';
//import p33_video from '../images/p3_krovPotocari/p33_video.mp4';
import p4_cover_l from '../images/p4_novaVogosca/light/p4_cover_l.jpg';
import p41_l from '../images/p4_novaVogosca/light/p41_l.jpg';
import p42_l from '../images/p4_novaVogosca/light/p42_l.jpg';
import p5_cover_l from '../images/p5_viaPax/light/p5_cover_l.jpg';
import p51_l from '../images/p5_viaPax/light/p51_l.jpg';
import p52_l from '../images/p5_viaPax/light/p52_l.jpg';
//import p53_video from '../images/p5_viaPax/p53_video.mp4';
//import p54_video from '../images/p5_viaPax/p54_video.mp4';
import p6_cover_l from '../images/p6_villaVerdeVogosca/light/p6_cover_l.jpg';
import p61_l from '../images/p6_villaVerdeVogosca/light/p61_l.jpg';
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
      coverImageLight: p1_cover_l, 
      contentImages: [p1_cover, p11, p12, p13],
      contentImagesLight: [p1_cover_l, p11_l, p12_l, p13_l],
      // video: p14_video 
    },      
    {
      projectId: 'p2_kiseljakBarFloor',
      title: 'KISELJAK BAR FLOOR',
      location: 'Kiseljak',
      investor: 'BAR FLOR d.o.o.',
      size: '16 000',
      coverImage: p2_cover,
      coverImageLight: p2_cover_l,
      contentImages: [p2_cover,p21, p22, p23, p24],
      contentImagesLight: [p2_cover_l,p21_l, p22_l, p23_l, p24_l],
      video:''      
    },  
    {
      projectId: 'p3_krovPotocari',
      title: 'KROV POTOČARI',
      location: 'Potočari',
      investor: 'TIKA',
      size: '16 500',
      coverImage: p3_cover_l,
      coverImageLight: p3_cover,
      contentImages: [p3_cover, p31, p32],
      contentImagesLight: [p3_cover_l, p31_l, p32_l],
      //video: p33_video      
    },  
    {
      projectId: 'p4_novaVogosca',
      title: 'NOVA VOGOŠĆA',
      location: 'VOGOŠĆA',
      investor: 'NOVA VOGOŠĆA d.o.o.',
      size: '20 000',
      coverImageLight: p4_cover_l,
      coverImage: p4_cover,
      contentImages: [p4_cover, p41, p42],
      contentImagesLight: [p4_cover_l, p41_l, p42_l],
      video:''             
    },
    {
      projectId: 'p5_viaPax',
      title: 'VIA PAX',
      location: 'LOKACIJA',
      investor: 'INVESTITOR',
      size: '3 800',
      coverImage: p5_cover,
      contentImages: [p5_cover, p51, p52],
      coverImageLight: p5_cover_l,
      contentImagesLight: [p5_cover_l, p51_l, p52_l]
      //video: p53_video      
    },  
    {
      projectId: 'p6_villaVerdeVogosca',
      title: 'VILLA VERDE',
      ocation: 'Vogošća',
      investor: 'INVESTITOR',
      size: '3 500',
      coverImage: p6_cover,
      contentImages: [p6_cover, p61],
      coverImageLight: p6_cover_l,
      contentImagesLight: [p6_cover_l, p61_l],
      //video: p62_video     
    }    
  ]
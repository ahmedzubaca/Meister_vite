import Home from '../home/components/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/components/Projects';
import SingleProject from '../projects/components/SingleProject';

const routesData = [
  { path: '/', component: Home },
  { path: '/about', component: About },  
  { path: '/projects', component: Projects },
  { path: '/projects/:projectTitle', component: SingleProject },
  { path: '/contact', component: Contact },
];
export default routesData;
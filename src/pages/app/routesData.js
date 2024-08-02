import Home from '../home/components/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/components/Projects';
import ProjectsDetails from '../projects/components/ProjectsDetails';

const routesData = [
  { path: '/', component: Home },
  { path: '/about', component: About },  
  { path: '/projects', component: Projects },
  { path: '/projects/:projectTitle', component: ProjectsDetails },
  { path: '/contact', component: Contact },
];
export default routesData;
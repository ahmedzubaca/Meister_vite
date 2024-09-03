import { Routes, Route, useLocation} from "react-router-dom";
import Home from '../home/components/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/components/Projects';
import ProjectsDetails from '../projects/components/ProjectsDetails';
import { AnimatePresence } from 'framer-motion';

function RoutesData() {
  const location = useLocation();

  return ( 
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectTitle' element={<ProjectsDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
    
  );
}
export default RoutesData;
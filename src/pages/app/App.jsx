import Navbar from '../navbar/components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import routesData from './routesData';


const App = () => {
  return (
    
      <Router>
        <header>
          <Navbar/>
        </header>
         <Routes> 
           {
             routesData.map((route, index) => (
               <Route path = {route.path} element = {<route.component/>} key={index} />
            ))
         }  
         </Routes> 
      </Router>            
  );  
}
export default App;
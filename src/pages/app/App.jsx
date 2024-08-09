import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from '../navbar/components/Navbar';
import routesData from './routesData';
import { MenuProvider } from "../../helperFunctions/MenueContext";


const App = () => {
  return (
    <MenuProvider>
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
    </MenuProvider>            
  );  
}
export default App;
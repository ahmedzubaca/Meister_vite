import { BrowserRouter as Router} from "react-router-dom";
import Navbar from '../navbar/components/Navbar';
import RoutesData from "./RoutesData";
import { MenuProvider } from "../../contextFiles/menuContext/MenuContext";
import { ScrollProvider } from "../../contextFiles/scrollContext/ScrollContext";

const App = () => {
  return (
    <ScrollProvider >
    <MenuProvider>
      <Router>
        <header>
          <Navbar/>
        </header>
        <RoutesData /> 
      </Router>
    </MenuProvider>
    </ScrollProvider>            
  );  
}
export default App;
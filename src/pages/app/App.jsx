import { BrowserRouter as Router} from "react-router-dom";
import Navbar from '../navbar/components/Navbar';
import RoutesData from "./RoutesData";
import { MenuProvider } from "../../helperFunctions/MenueContext";

const App = () => {
  return (
    <MenuProvider>
      <Router>
        <header>
          <Navbar/>
        </header>
        <RoutesData /> 
      </Router>
    </MenuProvider>            
  );  
}
export default App;
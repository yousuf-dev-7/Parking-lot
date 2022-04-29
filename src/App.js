
import './App.css';
import {Button} from './Components/Button'
import {Header} from './Components/Header'
import {Welcome} from './Components/Welcome'
import {UserField, UserField2} from './Components/UserField'
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {CheckIn} from "./pages/CheckIn"
import {CheckOut} from "./pages/CheckOut"
import {Find} from "./pages/Find"
import { ShowLots } from './pages/ShowLots';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    
    <div className='App'>

      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/checkin" element={<CheckIn/>}/>
        <Route exact path="/checkout" element={<CheckOut/>}/>
        <Route exact path="/find" element={<Find/>}/>
        <Route exact path="/showlots" element={<ShowLots/>}/>
      </Routes>
      </Router>
      </div>
   

  
 


  );
}




export default App;


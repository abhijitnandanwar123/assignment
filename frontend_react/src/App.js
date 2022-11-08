import './App.css';
import Login  from './Components/Login';
import {Router,Routes,Route,Link} from 'react-router-dom'
import { Formnew } from './Components/Formnew';
import Dashboard from './Components/Dashboard';
import Popup from './Components/Popup';
function App() {
  return (
    <>
 
    <Routes>
        <Route path="Login" element={<Login/>}/>
        <Route path="/" element={<Login/>}/>

        <Route path="Form" element={<Formnew/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>
        <Route path="Popup" element={<Popup/>}/>

      </Routes> 
     
    </>
  );
}

export default App;

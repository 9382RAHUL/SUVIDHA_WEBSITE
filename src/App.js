
import './App.css';
// import Home from './components/Home';
// import {Route,Routes} from "react-router-dom";
import {   Route, Routes,BrowserRouter } from 'react-router-dom';


import Loginsignup from './components/Loginsignup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Events from './components/Events';
import Donar from './components/Donar';
import Contact from './components/Contact';

function App() {
  return (
    <>
 <div >
    <Navbar/>
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route exact path='/login' element={<Loginsignup/>}/>
      <Route exact path='/events' element={<Events/>}/>
      <Route exact path='/donar' element={<Donar/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    

    </BrowserRouter>
    </div>
    <Footer/>

 </div>
    </>
  );
}

export default App;

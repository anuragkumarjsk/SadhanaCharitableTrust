import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Activities from './Pages/Activities';
import Donate from './Pages/Donate';
import Volunteer from './Pages/Volunteer';
import ContactUs from './Pages/ContactUs';
import NavBar from './Pages/NavBar';
import Success from './Pages/Success';
import Failiure from './Pages/Failiure';
import TopNavbar from './Pages/TopNavbar';
import 'react-slideshow-image/dist/styles.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 
        {/* <TopNavbar/>  */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/activities" element={<Activities />}/>
           <Route path="/donate" element={<Donate />} />
           <Route path="/volunteer" element={<Volunteer />}/>
           <Route path="/contactus" element={<ContactUs />} />
           <Route path="/success" element={<Success />} />
           <Route path="/failiure" element={<Failiure />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
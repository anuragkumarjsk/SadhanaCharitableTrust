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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/activities" element={<Activities />}/>
           <Route path="/donate" element={<Donate />} />
           <Route path="/volunteer" element={<Volunteer />}/>
           <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
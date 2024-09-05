import { useState } from 'react'
import './App.css'
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import GetWorkForce from './components/GetWorkForce';
import Footer from './components/Footer';
import Pay from './components/Pay';
import Login from './components/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddWorkforce from './components/AddWorkforce';

function App() {
  
  return (
    <>
      <Router>
     
      <Routes>
        <Route path="/" element={
           <>
             <section id="home"><Home /></section>
             <section id="about"><About /></section>
             <section id="services"><Services/></section>
             <section id="contact"><Contact /></section>
             <section id="footer"><Footer/></section>
            
         </>
        }></Route>
          <Route path="/getWorkForce" element={<GetWorkForce/>}></Route>
          <Route path="/pay" element={<Pay/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/addworkforce' element={<AddWorkforce/>}/>
          </Routes>
         
          <ToastContainer />
      </Router>
    </>
  )
}

export default App

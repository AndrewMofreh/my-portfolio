import logo from './logo.svg';
import './App.css';
import Header from './component/1-header/Header';
import Hero from './component/2-hero/Hero';
import Main from './component/3-main/Main';
import Contact from './component/4-contact/Contact';
import Footer from './component/5-footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import'../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Skills from './component/5-skills/Skills';




function App() {
        let[topBut, setTopBut]= useState(false)


        useEffect(function(){                window.addEventListener("scroll",()=>{
                if (window.scrollY > 300 )setTopBut(true)
                
                else setTopBut(false)
                })}
                ,[])




  return (
<Router>

        <div className='webContent container' id='upper'>
                <Header/>
                <Hero/>
        <div className='hr'></div>
                <Skills/>
        <div className='hr'></div>
                <Main/>
        <div className='hr'></div>
                <Contact/>

        <Routes>
                <Route path='/Hero' element={<Hero/>}/>
                <Route path='/Main' element={<Main/>}/>
                <Route path='/Contact' element={<Contact/>}/>

        </Routes>
        <div className='hr'></div>
                <div className='up-arrow' style={{opacity: topBut? 1 : 0, transition: "1s" }}>
                        <a href='#upper'>
                                <i class=" mt-2 fa-solid fa-angle-up"></i>
                        </a>
                </div>
                <Footer/>
        </div>  
</Router>
  );
}

export default App;


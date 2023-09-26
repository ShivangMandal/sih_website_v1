import {React, useState, useEffect} from 'react';

import { Footer, Possibility, Features,  Header, WhatLMLS, } from './containers';
import { CTA, Navbar,  } from './components';

import Game from './components/Game';
import Egame from './game';
import runGame from './components/game/runGame';
import ScrollToTop from './components/ScrollToTop';

import './App.css';
import { BrowserRouter, Link, Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Blog from './containers/blog/blog';
// import { useState } from 'react';






const App = () => {

  
  // const [runGame, setRunGame] = useState(0);
 function run_game()
  {
 
     location.replace("./game");
     // //  setRunGame(1) ;
  }


return(
  <div className="App">
    <div className="gradient__bg">

     <BrowserRouter>
     <Navbar />
      <Routes>

          <Route path='/' element={<header/>}/>
          <Route path='game' element={<Egame/>}/>
      </Routes>
      </BrowserRouter>
     <Header />
      </div>
      <WhatLMLS />

     <div className='playButton' id="play">
      <button onClick={run_game}> Play Now </button>
      
   
      
       



     </div>

      <Features />
      <Possibility />
      <CTA />
      <Blog/>
      <Footer />
      <ScrollToTop/>
      
    

  </div>
);
    }

export default App;

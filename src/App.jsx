import {React, useState, useEffect} from 'react';

import { Footer, Possibility, Features,  Header, WhatLMLS, } from './containers';
import { CTA, Navbar,  } from './components';

import Game from './components/Game';
import Egame from './game';
import runGame from './components/game/runGame';


import './App.css';
import { BrowserRouter, Link, Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom';
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

     <div className='playButton'>
      <button onClick={run_game}> play  </button>
      
        {/* <div className= "game">

        {/* {runGame && <Game />}  */}
        {/* </div> */} */
      
      
       



     </div>

      <Features />
      <Possibility />
      <CTA />
      <Footer />
    

  </div>
);
    }

export default App;

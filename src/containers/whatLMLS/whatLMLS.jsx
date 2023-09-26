import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatLMLS.css';
import { useState } from 'react';



//  const [runGame, setRunGame] = useState(false); 
  
//   const run_game =()=>
//   {
//     //  location.toString="src/components/navbar/game.jsx";
//      setRunGame(true) ;
//   }

const WhatLMLS= () => (
  <div className="gpt3__whatgpt3 section__margin" id="wlms">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Lawman's Legacy?" text="Lawman's Legacy is a game changer project aimed at closing the knowledge gap among India's youth.
- We propose the development of an engaging and educational gamified platform that will empower children with the understanding they need to protect themselves and make informed decisions." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <a href='#blog'><p>Explore the Blogs</p></a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Fun" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Simulations" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      
      
    </div>


  </div>
);

export default WhatLMLS;

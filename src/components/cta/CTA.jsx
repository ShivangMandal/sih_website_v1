import React, { useState } from 'react';
import './cta.css';

const access =()=>
{ 
  location.href="https://forms.gle/o5VmEQSTQ8CYtKkD7"  ;
}
const CTA = () => 
(
  
  
  <div className="gpt3__cta">


    
    <div className="gpt3__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" onClick={access}>Get Started</button>
    </div>
  </div>
);

export default CTA;

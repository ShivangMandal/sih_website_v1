import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="lmls__header section__padding" id="home">
    <div className="lmls__header-content">
      <h1 className="gradient__text">Let&apos;s Play a <a href='#play' >Game</a> to learn your rights</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>



    </div>
    

    <div className="lmls__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;

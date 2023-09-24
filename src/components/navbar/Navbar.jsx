import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import lawlady2 from '../../lawlady2.png'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  

 
  



  return (
    <div className="lmls__navbar">
      <div className="lmls__navbar-links">
        <div className="lmls__navbar-links_logo">
          <img src={lawlady2} />
        </div>

        <div className="lmls__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#lmls">What is Lawman's Legacy?</a></p>
          {/* <Link to="/game">Play now </Link> */}
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
          
        </div>
      </div>

      <div className="lmls__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#lmls">What is Lawman's Legacy?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>

        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

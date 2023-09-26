import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const report =()=>
  {
    location.href="https://forms.gle/zVfeyKwpxdc58N7Z8";
  }

  return (
    <div className="lmls__navbar"> 
     
      <div className="lmls__navbar-links_logo">
         <a href='#home'> <img src={logo} /> </a>
        </div>

      <div className="lmls__navbar-links">
     
        <div className="lmls__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wlms">What is Lawman's Legacy?</a></p>
          <p ><a href="#play">Play Lawman's legacy</a></p>
          <p><a href="#possibility">Possibility</a></p>
          <p><a href="#features">Featurs</a></p>
          <p><a href="#blog">Blogs</a></p>
          
        </div>
      </div>

      <div className="report-button">
       
        <button type="button" onClick={report}>Report Offence</button>
      </div>

      <div className="lmls__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wlms">What is Lawman's Legacy?</a></p>
            <p><a href="#play">Play Lawman's legacy</a></p>
            <p><a href="#possibility">Possibility</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#blog">Blogs</a></p>
          </div>

        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

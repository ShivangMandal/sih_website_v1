import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import lawlady2 from '../../lawlady2.png'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);



  return (
    <div className="lmls__navbar"> 
     
      <div className="lmls__navbar-links_logo">
         <a href='#home'> <img src={lawlady2} /> </a>
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

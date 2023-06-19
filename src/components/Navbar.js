import React,  { useState } from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fa-solid fa-snowflake" />
            <h1>SnowFood</h1>
          </Link>
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Yukimuro
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/self" className='nav-links'  onClick={closeMobileMenu} >
                自己紹介
              </Link>
            </li>
          </ul>
          <button className='bars' onClick={toggleMenu}>
            <i className={isOpen ? "fa-solid fa-xmark" : "fas fa-bars"} />
          </button>
        </div>  
      </nav>  
    </>
  )
}

export default Navbar
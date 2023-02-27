import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Header.css';


 function Header() {
  const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (

    <div className='header'>
      <nav ref={navRef}>
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#news">News</a>
				
				<a href="#">Donation</a>
				<a href="#">ChairPerson</a>
				<a href="#contact">Contact</a>
				<button className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
	  <button className="nav-btn" onClick={showNavbar}>
	  <FaBars />
  </button>

  </div>
      
 
  )
}
export default Header

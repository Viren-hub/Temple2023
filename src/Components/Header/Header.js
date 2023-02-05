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
				<a href="/#">Home</a>
				<a href="/#">About</a>
				<a href="/#">ChairPerson</a>
				<a href="/#">Contact</a>
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

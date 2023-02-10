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
				<a href="/#">HOME</a>
				<a href="/#">ABOUT</a>
				<a href="/#">EVENT</a>
				<a href="/#">HOLIS</a>
				<a href="/#">PUJA</a>
				<a href="/#">DONATION</a>
				<a href="/#">CHAIRPERSON</a>
				<a href="/#">CONTACT</a>
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

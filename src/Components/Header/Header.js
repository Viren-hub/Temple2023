import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Header.css';
import Data from '../../data.json';


function Header() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	return (



		<div className='header'>
			<nav ref={navRef}>
				<a href="#home">{Data[0].navlinks[0]}</a>
                <a href="#about">{Data[0].navlinks[1]}</a>

				<a href="#news">{Data[0].navlinks[2]}</a>

				<a href="#">{Data[0].navlinks[3]}</a>
				<a href="#">{Data[0].navlinks[4]}</a>
				<a href="#contact">{Data[0].navlinks[5]}</a>
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

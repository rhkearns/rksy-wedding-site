import React, { useRef } from 'react';
import './navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<header>
			<nav ref={navRef} className="nav-bar">
				<NavLink to="/" className="nav-link">
					Home
				</NavLink>
				<NavLink to="/story" className="nav-link">
					Our Story
				</NavLink>
				<NavLink to="/directions" className="nav-link">
					Directions
				</NavLink>
				<NavLink to="/schedule" className="nav-link">
					Schedule
				</NavLink>
				<NavLink to="/faqs" className="nav-link">
					FAQs
				</NavLink>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};

export default Navbar;

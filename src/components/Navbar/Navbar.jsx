import React, { useRef } from 'react';
import './navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	// const hideNavbar = () => {
	// 	navRef.current.classList.remove('responsive_nav');
	// };

	return (
		<header>
			<nav ref={navRef} className="nav-bar">
				<NavLink to="/" className="nav-link" onClick={showNavbar}>
					Home
				</NavLink>
				<NavLink to="/story" className="nav-link" onClick={showNavbar}>
					Our Story
				</NavLink>
				<NavLink to="/directions" className="nav-link" onClick={showNavbar}>
					Directions
				</NavLink>
				<NavLink to="/schedule" className="nav-link" onClick={showNavbar}>
					Schedule
				</NavLink>
				<a
					href="https://www.zola.com/registry/ryanandsam2025"
					target="_blank"
					rel="noopener noreferrer"
					onClick={showNavbar}
				>
					Registry
				</a>
				<NavLink to="/faqs" className="nav-link" onClick={showNavbar}>
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

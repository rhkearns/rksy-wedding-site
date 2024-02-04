import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="nav-bar">
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
		</nav>
	);
};

export default Navbar;

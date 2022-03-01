import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
	return (
		<nav className="nav">
			<ul className="grid">
				<li className="aside-item">
					<NavLink to="/users" className="nav-link">
						Users
					</NavLink>
				</li>
				<li className="aside-item">
					<NavLink to="/developers" className="nav-link">
						Developers
					</NavLink>
				</li>
				<li className="aside-item">
					<NavLink to="/clients" className="nav-link">
						Clients
					</NavLink>
				</li>
				<li className="aside-item">
					<NavLink to="/my-profile" className="nav-link">
						My Profile
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavLinks;

import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
	return (
		<nav className="nav">
			<ul className="grid">
				<li className="aside-item flex">
					<NavLink to="/users">Users</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavLinks;

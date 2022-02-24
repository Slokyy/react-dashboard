import React from "react";
import NavLinks from "./NavLinks";

const SideBar = () => {
	return (
		<aside className="sidebar">
			<a href="/">
				<img
					src="./images/universal-logo-small.png"
					className="sidebar-logo"
					alt="Sidebar universal logo"
				/>
			</a>
			<NavLinks />
		</aside>
	);
};

export default SideBar;

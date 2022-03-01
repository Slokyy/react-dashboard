import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../pages/context";

// CSS
import "./SearchHeader.css";

const SearchHeader = ({ searchQuery, setSearchQuery }) => {
	const { handleLocationPath, addUserSlide, setAddUserSlide, pathname } =
		useGlobalState();

	useEffect(() => {
		// setPath(handleLocationPath());
	}, []);

	useEffect(() => {
		console.log("I am user slide", addUserSlide);
	}, [addUserSlide]);

	return (
		<div className="table-header table-section-header flex">
			{/* ==> Search Field */}
			<label htmlFor="table-search" className="search-group flex flex-center">
				<span className="icon icon-sm icon-search"></span>
				<input
					type="text"
					name="table-search"
					placeholder="Search"
					id="table-search"
					className="table-search"
					onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
				/>
			</label>
			{/* ==> Add User button */}
			{pathname === "users" && (
				<button
					onClick={() => setAddUserSlide(!addUserSlide)}
					className="btn btn-small btn-blue add-user"
					id="add-user"
				>
					Add User
				</button>
			)}
			{/* ==> Add client button */}
			{pathname === "clients" && (
				<button id="add-client" className="btn btn-small btn-blue">
					Add Client
				</button>
			)}
		</div>
	);
};

export default SearchHeader;

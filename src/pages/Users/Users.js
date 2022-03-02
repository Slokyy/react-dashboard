import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context";
import { UserProvider } from "./UserContext";
import Table from "../../components/Table/Table";
import SearchHeader from "../../components/Table/SearchHeader";
import AddUser from "../../components/Sliders/User/AddUser";
import Overlay from "../../components/Overlay";
import EditUser from "../../components/Sliders/User/EditUser";

const url = "http://localhost:8000/users";

const Users = () => {
	/**
	 * @TODO make edit user slider that grabs cliecked user data
	 * and stores it inside inputs, on edit it find user by its id and
	 * with put method edits user data
	 * @TODO view user profile with data, data needs to be sent to the profile page of the user
	 * exaple: localhost:3000/users/user_name or some other key
	 * @TODO delete user data (easiest), remove data via passed through id with DELETE method
	 * only add user function should be on this page, rest should be defined on users
	 */
	const [searchQuery, setSearchQuery] = useState("");
	const [activeEditId, setActiveEditId] = useState(0);
	const {
		data,
		setData,
		isLoading,
		setIsLoading,
		fetchUsers,
		handleLocationPath,
		addUserSlide,
		setAddUserSlide,
	} = useGlobalState();

	const keys = ["first_name", "last_name", "email"];

	useEffect(() => {
		handleLocationPath();
		fetchUsers(url);
	}, []);

	useEffect(() => {
		console.log(searchQuery);
	}, [searchQuery]);

	const search = (data) => {
		return data.filter((item) => {
			return keys.some((key) => item[key].toLowerCase().includes(searchQuery));
		});
	};

	return (
		<UserProvider>
			<section className="section">
				<SearchHeader
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
				{isLoading && <div>Loading....</div>}
				{!data && !isLoading && <div>Prazna tabela.....</div>}
				{data && <Table searchQuery={searchQuery} data={search(data)} />}
				{data && <AddUser />}
				{data && <EditUser />}
				{addUserSlide && <Overlay />}
			</section>
		</UserProvider>
	);
};

export default Users;

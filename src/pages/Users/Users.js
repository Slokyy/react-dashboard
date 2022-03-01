import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context";
import Table from "../../components/Table/Table";
import SearchHeader from "../../components/Table/SearchHeader";
import AddUser from "../../components/Sliders/AddUser";

const url = "http://localhost:8000/users";

const Users = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const {
		data,
		setData,
		isLoading,
		setIsLoading,
		fetchUsers,
		handleLocationPath,
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
		<section className="section">
			<SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			{isLoading && <div>Loading....</div>}
			{!data && !isLoading && <div>Prazna tabela.....</div>}
			{data && <Table searchQuery={searchQuery} data={search(data)} />}
			{data && <AddUser />}
		</section>
	);
};

export default Users;

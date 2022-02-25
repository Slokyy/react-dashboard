import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context";

const url = "http://localhost:8000/users";

const Users = () => {
	const [users, setUsers] = useState();
	const [isLoading, setIsLoading] = useState(true);

	// const [isLoading, setIsLoading] = useState(true);

	const { fetchUsers } = useGlobalState();

	useEffect(() => {
		fetchUsers(url, setUsers, setIsLoading);
	}, []);

	return (
		<>
			{isLoading && <div>Loading....</div>}
			{!users && !isLoading && <div>Prazna tabela.....</div>}
			{users && (
				<ul>
					{users.map((user) => {
						return <li key={user.id}>{user.first_name}</li>;
					})}
				</ul>
			)}
		</>
	);
};

export default Users;

import React, { useState, useEffect, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const fetchUsers = (url, setUsers, setIsLoading) => {
		fetch(url, {
			method: "GET",
		})
			.then((res) => {
				if (!res.ok) {
					setIsLoading(false);
					throw Error("OK: Bad response", res.status);
				}
				return res.json();
			})
			.then((data) => {
				setUsers(data);
				setIsLoading(false);
				console.log(data);
			})
			.catch((err) => {
				console.log("Error message: ", err);
				setIsLoading(false);
			});
	};

	const handleLocationPath = () => {
		const page = window.location.pathname.replace(/^\/|\/$/g, "");
		return page;
	};

	/* const useFetchID = (url, id, method) => {
		
		useEffect(() => {
			fetch(url + id, {
				method: method,
			}).then(

			)
		}, [])
	} */

	return (
		<AppContext.Provider
			value={{
				handleLocationPath,
				fetchUsers,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// Custom Hook
// https://stackoverflow.com/questions/66747556/react-js-error-uselocation-may-be-used-only-in-the-context-of-a-router-com
const useGlobalState = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalState };

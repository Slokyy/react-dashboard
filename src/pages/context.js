import React, { useState, useEffect, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [pathname, setPathname] = useState("");
	const [data, setData] = useState([]);
	const [addUserSlide, setAddUserSlide] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [refetch, setRefetch] = useState(false);
	const fetchUsers = (url) => {
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
				setData(data);
				setIsLoading(false);
				console.log(data);
			})
			.catch((err) => {
				console.log("Error message: ", err);
				setIsLoading(false);
			});
	};

	const handleLocationPath = () => {
		setPathname(window.location.pathname.replace(/^\/|\/$/g, ""));
	};

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				isLoading,
				setIsLoading,
				pathname,
				setPathname,
				handleLocationPath,
				fetchUsers,
				addUserSlide,
				setAddUserSlide,
				refetch,
				setRefetch,
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

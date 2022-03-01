import React, { useEffect } from "react";
import { useGlobalState } from "../context";

const Clients = () => {
	const { pathname, handleLocationPath } = useGlobalState();

	useEffect(() => {
		handleLocationPath();
	}, []);
	return <div>Clients {pathname}</div>;
};

export default Clients;

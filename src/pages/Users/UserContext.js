import React, { useContext, useState } from "react";
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
	const [activeEditUserId, setActiveEditUserId] = useState(1);
	// const [addUserSlide, setAddUserSlide] = useState(false);
	const [editUserSlide, setEditUserSlide] = useState(false);
	return (
		<UserContext.Provider
			value={{
				activeEditUserId,
				setActiveEditUserId,
				editUserSlide,
				setEditUserSlide,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

const useUserState = () => {
	return useContext(UserContext);
};
export { UserProvider, useUserState };

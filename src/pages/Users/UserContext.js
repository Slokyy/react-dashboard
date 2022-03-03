import React, { useContext, useState } from "react";
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
	const [activeUserId, setActiveUserId] = useState(null);
	// const [addUserSlide, setAddUserSlide] = useState(false);
	const [tempData, setTempData] = useState([]);

	const [editUserSlide, setEditUserSlide] = useState(false);
	const [openUserDelete, setOpenUserDelete] = useState(false);

	return (
		<UserContext.Provider
			value={{
				activeUserId,
				setActiveUserId,
				editUserSlide,
				setEditUserSlide,
				openUserDelete,
				setOpenUserDelete,
				tempData,
				setTempData,
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

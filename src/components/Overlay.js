import React from "react";
import { useGlobalState } from "../pages/context";
import { useUserState } from "../pages/Users/UserContext";

const Overlay = () => {
	const { addUserSlide, setAddUserSlide } = useGlobalState();
	const {
		tempData,
		setTempData,
		activeUserId,
		setActiveUserId,
		setOpenUserDelete,
	} = useUserState();

	const handleUserOverlay = () => {
		setAddUserSlide(false);
		setOpenUserDelete(false);
	};
	return (
		<div
			className={addUserSlide ? "overlay active" : "overlay"}
			onClick={() => handleUserOverlay()}
		></div>
	);
};

export default Overlay;

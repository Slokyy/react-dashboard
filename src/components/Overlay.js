import React from "react";
import { useGlobalState } from "../pages/context";
const Overlay = () => {
	const { addUserSlide, setAddUserSlide } = useGlobalState();

	const handleUserOverlay = () => {
		setAddUserSlide(false);
	};
	return (
		<div
			className={addUserSlide ? "overlay active" : "overlay"}
			onClick={() => handleUserOverlay()}
		></div>
	);
};

export default Overlay;

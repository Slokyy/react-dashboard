import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../pages/context";
import { useUserState } from "../../pages/Users/UserContext";
import "./Modals.css";

const DeleteUser = () => {
	const {
		activeUserId,
		setActiveUserId,
		openUserDelete,
		setOpenUserDelete,
		tempData,
		setTempData,
	} = useUserState();
	const { refetch, setRefetch } = useGlobalState();

	useEffect(() => {
		if (activeUserId) {
			fetch(`http://localhost:8000/users/${activeUserId}`)
				.then((res) => res.json())
				.then((data) => {
					setTempData(data);
					console.log("Usao sam u modal");
				})
				.catch((err) => {
					console.log("FetchDeleteUserData: ", err);
				});
		}
	}, [activeUserId]);

	const handleDelete = () => {
		fetch(`http://localhost:8000/users/${activeUserId}`, {
			method: "DELETE",
		})
			.then(() => {
				setOpenUserDelete(false);
				setRefetch(!refetch);
				setActiveUserId(null);
				setTempData([]);
				// navigate("/");
			})
			.catch((err) => {
				console.log("DeleteFetch: ", err);
			});
	};

	const handleCloseModal = () => {
		setOpenUserDelete(false);
		setActiveUserId(null);
		setTempData([]);
	};
	return (
		<section
			className={
				openUserDelete
					? "delete-user-container modal toggle-delete active"
					: "delete-user-container modal toggle-delete"
			}
			id="delete-user-container"
		>
			<form action="#!" className="delete-user-form flex">
				<h3>
					Are you sure you want to delete
					<span>
						{tempData?.first_name} {tempData?.last_name}
					</span>
				</h3>

				<div className="button-group flex">
					<input
						type="button"
						className="btn btn-small btn-blue js-btn-close"
						onClick={() => handleDelete()}
						value="Yes"
					/>
					<input
						type="button"
						className="btn btn-small btn-blue-hollow js-btn-close"
						onClick={() => handleCloseModal()}
						value="No"
					/>
				</div>
			</form>
		</section>
	);
};

export default DeleteUser;

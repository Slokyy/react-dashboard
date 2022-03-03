import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../../pages/context";
import { useUserState } from "../../../pages/Users/UserContext";
import "./User.css";

const EditUser = () => {
	const [editData, setEditData] = useState([]);
	const [isPosting, setIsPosting] = useState(false);
	const { activeUserId, editUserSlide, setEditUserSlide } = useUserState();
	const navigate = useNavigate();

	useEffect(() => {
		if (activeUserId) {
			fetch(`http://localhost:8000/users/${activeUserId}`)
				.then((res) => res.json())
				.then((data) => {
					setEditData(data);
				})
				.catch((err) => console.log("EditFetchErr: ", err));
		}
	}, [activeUserId]);

	const handleEditUserSubmit = (e) => {
		e.preventDefault();
		setIsPosting(true);
		fetch(`http://localhost:8000/users/${activeUserId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(editData),
		})
			.then(() => setIsPosting(false))
			.then(() => {
				setTimeout(() => {
					// console.log("Edited user");
					// navigate("/");
					setEditUserSlide(!editUserSlide);
				}, 1000);
			});
	};
	return (
		<section
			className={
				editUserSlide
					? "slide-container edit-user-container active"
					: "slide-container edit-user-container"
			}
			id="edit-user-container"
		>
			<span
				className="icon icon-md icon-ex  js-btn-close slide-ex"
				onClick={() => setEditUserSlide(!editUserSlide)}
			></span>
			<form
				action="#!"
				className="slide-form flex"
				onSubmit={handleEditUserSubmit}
			>
				<h2>Edit user: {editData?.first_name}</h2>

				<div className="form-group flex">
					<img
						src={editData?.avatar?.image_path}
						className="profile-picture"
						alt="Loreta Ipsum"
					></img>
					<label
						className="label-image shadow-me flex"
						htmlFor="add-user-img"
					></label>

					<input
						type="file"
						name="add-user-img"
						className="add-user-img"
						id="add-user-img"
						hidden
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						id="user-name"
						className="shadow-me input-text-gray"
						name="user-name"
						defaultValue={editData?.first_name}
						onChange={(e) =>
							setEditData({ ...editData, first_name: e.target.value })
						}
						required
					/>
					<label htmlFor="user-email" className="label-name">
						<span className="content-name">Name:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-lname"
						name="user-lname"
						className="shadow-me input-text-gray"
						defaultValue={editData?.last_name}
						onChange={(e) =>
							setEditData({ ...editData, last_name: e.target.value })
						}
						required
					/>
					<label htmlFor="user-lname" className="label-name">
						<span className="content-name">Last name:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-email"
						className="shadow-me input-text-gray"
						name="user-email"
						defaultValue={editData?.email}
						onChange={(e) =>
							setEditData({ ...editData, email: e.target.value })
						}
						required
					/>
					<label htmlFor="user-email" className="label-name">
						<span className="content-name">Email:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-phone"
						className="shadow-me input-text-gray"
						name="user-phone"
						defaultValue={editData?.phone}
						onChange={(e) =>
							setEditData({ ...editData, phone: e.target.value })
						}
						required
					/>
					<label htmlFor="user-phone" className="label-name">
						<span className="content-name">Phone:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-street"
						className="shadow-me input-text-gray"
						name="user-street"
						defaultValue={editData?.street}
						onChange={(e) =>
							setEditData({ ...editData, street: e.target.value })
						}
						required
					/>
					<label htmlFor="user-street" className="label-name">
						<span className="content-name">Street:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-city"
						className="shadow-me input-text-gray"
						name="user-city"
						defaultValue={editData?.city}
						onChange={(e) => setEditData({ ...editData, city: e.target.value })}
						required
					/>
					<label htmlFor="user-city" className="label-name">
						<span className="content-name">City:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-ptt"
						className="shadow-me input-text-gray"
						name="user-ptt"
						defaultValue={editData?.ptt}
						onChange={(e) => setEditData({ ...editData, ptt: e.target.value })}
						required
					/>
					<label htmlFor="user-ptt" className="label-name">
						<span className="content-name">PTT:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-country"
						className="shadow-me input-text-gray"
						name="user-country"
						defaultValue={editData?.country}
						onChange={(e) =>
							setEditData({ ...editData, country: e.target.value })
						}
						required
					/>
					<label htmlFor="user-country" className="label-name">
						<span className="content-name">Country:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-status"
						className="shadow-me input-text-gray"
						name="user-status"
						defaultValue={editData?.status}
						onChange={(e) =>
							setEditData({ ...editData, status: e.target.value })
						}
						required
					/>
					<label htmlFor="user-status" className="label-name">
						<span className="content-name">Status:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-role"
						className="shadow-me input-text-gray"
						name="user-role"
						defaultValue={editData?.role}
						onChange={(e) => setEditData({ ...editData, role: e.target.value })}
						required
					/>
					<label htmlFor="user-role" className="label-name">
						<span className="content-name">Role:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-tekuci-rac"
						className="shadow-me input-text-gray"
						name="user-tekuci-rac"
						defaultValue={editData?.tekuci_racun}
						onChange={(e) =>
							setEditData({ ...editData, tekuci_racun: e.target.value })
						}
						required
					/>
					<label htmlFor="user-tekuci-rac" className="label-name">
						<span className="content-name">Tekući račun:</span>
					</label>
				</div>

				<div className="form-group input flex">
					<input
						type="button"
						className="btn js-btn-close shadow-me"
						onClick={() => setEditUserSlide(!editUserSlide)}
						defaultValue="Cancel"
					/>
					{!isPosting && (
						<input
							type="submit"
							className="btn btn-small btn-blue shadow-me"
							defaultValue="Edit user"
						/>
					)}
					{isPosting && (
						<input
							type="submit"
							className="btn btn-small btn-blue shadow-me"
							defaultValue="Editing user..."
						/>
					)}
				</div>
			</form>
		</section>
	);
};

export default EditUser;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../../pages/context";
import { useUserState } from "../../../pages/Users/UserContext";
import "./User.css";

const AddUser = () => {
	const { addUserSlide, setAddUserSlide, refetch, setRefetch } =
		useGlobalState();

	// Input field data
	const avatar = {
		image_path: "./images/profile-images/julian-wan.jpg",
		image_alt: "Some Image Alt",
	};
	const [user, setUser] = useState([]);

	const [isPosting, setIsPosting] = useState(false);

	/**
	 * @TODO Make add user funcitonality with POST method
	 * grab input field data and send it to localhost:8000/users
	 * generate random id somehow, math random + date combo
	 */

	/**
	 * Fetch users
	 */
	const handleAddUserSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			...user,
			avatar: avatar,
			status: "Active",
		};

		// console.log(user);
		setIsPosting(true);
		fetch("http://localhost:8000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then(() => setIsPosting(false))
			.then(() => {
				// setTimeout(() => {
				console.log("Posted");
				setRefetch(!refetch);
				setAddUserSlide(false);
				// setUser([]);
				// }, 1000);
			});
	};

	return (
		<section
			className={
				addUserSlide
					? "slide-container new-user-container active"
					: "slide-container new-user-container"
			}
			id="new-user-container"
		>
			<span
				className="icon icon-md icon-ex  js-btn-close slide-ex"
				onClick={() => setAddUserSlide(!addUserSlide)}
			></span>
			<form
				action="#!"
				className="slide-form flex"
				onSubmit={handleAddUserSubmit}
			>
				<h2>New User</h2>
				<div className="form-group flex">
					<label className="label-image shadow-me flex" htmlFor="add-user-img">
						Add image
					</label>
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
						defaultValue={user?.first_name}
						onChange={(e) => setUser({ ...user, first_name: e.target.value })}
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
						defaultValue={user?.last_name}
						onChange={(e) => setUser({ ...user, last_name: e.target.value })}
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
						defaultValue={user?.email}
						onChange={(e) => setUser({ ...user, email: e.target.value })}
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
						defaultValue={user?.phone}
						onChange={(e) => setUser({ ...user, phone: e.target.value })}
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
						defaultValue={user?.street}
						onChange={(e) => setUser({ ...user, street: e.target.value })}
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
						defaultValue={user?.city}
						onChange={(e) => setUser({ ...user, city: e.target.value })}
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
						defaultValue={user?.ptt}
						onChange={(e) => setUser({ ...user, ptt: e.target.value })}
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
						defaultValue={user?.country}
						onChange={(e) => setUser({ ...user, country: e.target.value })}
						required
					/>
					<label htmlFor="user-country" className="label-name">
						<span className="content-name">Country:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="password"
						id="user-password"
						className="shadow-me input-text-gray"
						name="user-password"
						defaultValue={user?.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
						required
					/>
					<label htmlFor="user-password" className="label-name">
						<span className="content-name">Password:</span>
					</label>
				</div>

				<div className="form-group">
					<input
						type="text"
						id="user-role"
						className="shadow-me input-text-gray"
						name="user-role"
						defaultValue={user?.role}
						onChange={(e) => setUser({ ...user, role: e.target.value })}
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
						defaultValue={user?.tekuci_racun}
						onChange={(e) => setUser({ ...user, tekuci_racun: e.target.value })}
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
						onClick={() => setAddUserSlide(!addUserSlide)}
						value="Cancel"
					/>
					{!isPosting && (
						<input
							type="submit"
							className="btn btn-small btn-blue shadow-me"
							value="Add user"
						/>
					)}
					{isPosting && (
						<input
							type="submit"
							className="btn btn-small btn-blue shadow-me"
							value="Posting user..."
						/>
					)}
				</div>
			</form>
		</section>
	);
};

export default AddUser;

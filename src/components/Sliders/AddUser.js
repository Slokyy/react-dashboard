import React from "react";
import { useGlobalState } from "../../pages/context";
import "./AddUser.css";

const AddUser = () => {
	const { handleLocationPath, addUserSlide, setAddUserSlide } =
		useGlobalState();

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
			<form action="#!" className="slide-form flex">
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
						value="Cancel"
					/>
					<input
						type="submit"
						className="btn btn-small btn-blue shadow-me"
						value="Add user"
					/>
				</div>
			</form>
		</section>
	);
};

export default AddUser;

import React, { useState } from "react";
import { useGlobalState } from "../../pages/context";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

const AddUser = () => {
	const { addUserSlide, setAddUserSlide, refetch, setRefetch } =
		useGlobalState();

	const navigate = useNavigate();

	// Input field data
	const [avatar, setAvatar] = useState({
		image_path: "some_path",
		image_alt: "Some Image Alt",
	});
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [ptt, setPtt] = useState("");
	const [country, setCountry] = useState("");
	const [password, setPassword] = useState("");
	const [status, setStatus] = useState("Active");
	const [role, setRole] = useState("");
	const [tekRacun, setTekRacun] = useState("");
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
		const user = {
			avatar,
			first_name,
			last_name,
			email,
			phone,
			street,
			city,
			ptt,
			country,
			status,
			password,
			role,
			tekuci_racun: tekRacun,
		};

		// console.log(user);
		setIsPosting(true);
		fetch("http://localhost:8000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then(() => setIsPosting(false))
			.then(() => {
				setTimeout(() => {
					console.log("Posted");
					navigate("/");
				}, 1000);
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
						value={first_name}
						onChange={(e) => setFirstName(e.target.value)}
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
						value={last_name}
						onChange={(e) => setLastName(e.target.value)}
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
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
						value={street}
						onChange={(e) => setStreet(e.target.value)}
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
						value={city}
						onChange={(e) => setCity(e.target.value)}
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
						value={ptt}
						onChange={(e) => setPtt(e.target.value)}
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
						value={country}
						onChange={(e) => setCountry(e.target.value)}
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
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
						value={role}
						onChange={(e) => setRole(e.target.value)}
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
						value={tekRacun}
						onChange={(e) => setTekRacun(e.target.value)}
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

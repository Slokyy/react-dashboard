import React from "react";
import { useGlobalState } from "../context";
import "./Profile.css";

const MyProfile = ({ isCheckLogedIn, setIsCheckLogedIn }) => {
	// loggedUser, setLoggedUser -- array object
	const {
		loggedUser,
		setLoggedUser,
		isLogedIn,
		setIsLogedIn,
		pathname,
		handleLocationPath,
	} = useGlobalState();

	const handleLogout = () => {
		localStorage.removeItem("user");
		setLoggedUser([]);
		setIsCheckLogedIn(false);
		setIsLogedIn(false);
	};

	if (isCheckLogedIn) {
		// handleLocationPath();
		// console.log(pathname);
		console.log("true");
	} else {
		console.log("false");
	}
	return (
		<>
			<section className="section-profile dev-profile-page grid">
				<div className="profile-info flex flex-center">
					<a href="#!" className="edit-button edit-user-toggle">
						<span className="icon icon-sm icon-edit"></span>
					</a>

					<form className="profile-group flex flex-center flex-column">
						<img
							src={loggedUser?.avatar?.image_path}
							className="rounded-50"
							alt={loggedUser?.avatar?.image_alt}
						/>

						<h2>
							{loggedUser?.first_name}
							<span>{loggedUser?.last_name}</span>
						</h2>

						<div className="profile-description">
							<p>
								<span className="bold-14">First Name: </span>
								{loggedUser?.first_name}
							</p>
							<p>
								<span className="bold-14">Last Name: </span>
								{loggedUser?.last_name}
							</p>
							<p>
								<span className="bold-14">Email: </span>
								{loggedUser?.email}
							</p>
							<p>
								<span className="bold-14">Role: </span>
								{loggedUser?.role}
							</p>
							<p>
								<span className="bold-14">Bank Account: </span>
								{loggedUser?.tekuci_racun}
							</p>
							<p>
								<span className="bold-14">Status: </span>
								{loggedUser?.status}
							</p>
						</div>

						<div className="form-group submit-profile-btn">
							<input
								type="submit"
								className="btn btn-blue btn-small-w"
								value="Insert hours"
							/>
						</div>

						<div className="form-group mb-30">
							<span className="bold-14">This month: 120:16:45</span>
						</div>

						<div className="form-group submit-profile-btn">
							<input
								type="submit"
								className="btn btn-blue-hollow btn-small-w"
								onClick={() => handleLogout()}
								value="Log out"
							/>
						</div>
					</form>
				</div>
				<div className="profile-table-area table-wrapper">
					<table className="table table-sm-blue" id="dev-client-table">
						<thead>
							<tr className="sticky">
								<th>Client</th>
								<th>Task</th>
								<th>Month</th>
								<th>Time</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Lorem ipsum very long client name</td>
								<td>Work on lorem ipsuming the pdf on the html channel</td>
								<td>17.11.2021</td>
								<td>00:45:00</td>
								<td>
									<div className="user-icon-group flex">
										<a href="#!" className="rounded-50 shadow-me ">
											<span className="icon icon-sm icon-p-15 icon-dots"></span>
										</a>
									</div>
								</td>
							</tr>
							<tr>
								<td>Lorem ipsum</td>
								<td>Very long lorem ipsum clients task in hand</td>
								<td>17.11.2021</td>
								<td>00:45:00</td>
								<td>
									<div className="user-icon-group flex">
										<a href="#!" className="rounded-50 shadow-me ">
											<span className="icon icon-sm icon-p-15 icon-dots"></span>
										</a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
};

export default MyProfile;

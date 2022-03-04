import React from "react";
import "./Profile.css";

const UserProfile = () => {
	return (
		<div>
			<section class="section-profile dev-profile grid">
				<div class="profile-info flex flex-center">
					<a href="#!" class="edit-button edit-user-toggle">
						<span class="icon icon-sm icon-edit"></span>
					</a>

					<form class="profile-group flex flex-center flex-column">
						<img
							src="<?php echo $imgPath; ?>"
							class="rounded-50"
							alt="<?php echo $altText; ?> "
						/>

						<h2>
							FirstName
							<span>Last Name</span>
						</h2>

						<div class="profile-description">
							<p>
								<span class="bold-14">Email:</span> Email
							</p>
							<p>
								<span class="bold-14">Role:</span> Role
							</p>
							<p>
								<span class="bold-14">Status:</span>Status
							</p>
						</div>

						<div class="form-group">
							<select name="client" id="client">
								<option value="Client">Client</option>
							</select>
						</div>

						<div class="form-group">
							<select name="month" id="month">
								<option value="Client">Month</option>
							</select>
						</div>

						<div class="form-group grid">
							<span class="bold-14">Hours in total: </span>
							<input
								type="number"
								name="dev-hours"
								id="dev-hours"
								class="number-input"
								min="00"
								max="24"
								value="00"
							/>
							<input
								type="number"
								name="dev-minutes"
								id="dev-minutes"
								class="number-input"
								min="00"
								max="59"
								value="00"
							/>
						</div>

						<div class="form-group submit-profile-btn">
							<input
								type="submit"
								class="btn btn-blue btn-small-w"
								value="Insert hours"
							/>
						</div>

						<div class="form-group mb-30">
							<span class="bold-14">This month: 120:16:45</span>
						</div>
					</form>
				</div>
				<div class="profile-table-area table-wrapper">
					<table class="table table-sm-blue" id="dev-client-table">
						<thead>
							<tr class="sticky">
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
									<div class="user-icon-group flex">
										<a href="#!">
											<span class="icon icon-sm icon-edit"></span>
										</a>
										<a href="#!">
											<span class="icon icon-sm icon-trash"></span>
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
									<div class="user-icon-group flex">
										<a href="#!">
											<span class="icon icon-sm icon-edit"></span>
										</a>
										<a href="#!">
											<span class="icon icon-sm icon-trash"></span>
										</a>
									</div>
								</td>
							</tr>

							<tr>
								<td>Lorem ipsum</td>
								<td>Lorem ispum</td>
								<td>17.11.2021</td>
								<td>00:45:00</td>
								<td>
									<div class="user-icon-group flex">
										<a href="#!">
											<span class="icon icon-sm icon-edit"></span>
										</a>
										<a href="#!">
											<span class="icon icon-sm icon-trash"></span>
										</a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
};

export default UserProfile;

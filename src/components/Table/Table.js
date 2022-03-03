import React from "react";
import { useGlobalState } from "../../pages/context";
import { useUserState } from "../../pages/Users/UserContext";
import "./Table.css";

const Table = ({ searchQuery, data }) => {
	const { refetch, setRefetch } = useGlobalState();
	const {
		activeUserId,
		setActiveUserId,
		editUserSlide,
		setEditUserSlide,
		openUserDelete,
		setOpenUserDelete,
	} = useUserState();

	const handleEditSlide = (id) => {
		setActiveUserId(id);
		setRefetch(!refetch);
		setEditUserSlide(!editUserSlide);
	};

	const handleDeleteModal = (id) => {
		setOpenUserDelete(!openUserDelete);
		setActiveUserId(id);
		setRefetch(!refetch);
	};
	return (
		<div className="table-section">
			{/* Table Section*/}
			{/* ==> Table */}
			<table className="table big-table" id="table" cellSpacing="1">
				{/* thead */}
				<thead>
					<tr className="sticky">
						<th>Avatar</th>
						<th>First name</th>
						<th>Last name</th>
						<th>City</th>
						<th>Role</th>
						<th>Status</th>
						<th>Email</th>
						<th>Options</th>
					</tr>
				</thead>
				{/* thead end */}
				{/* tbody */}
				<tbody>
					{data.map((user) => {
						return (
							<tr key={user.id}>
								<td>
									<img
										className="table-avatar-img"
										src={user.avatar.image_path}
										alt={user.avatar.image_alt}
									/>
								</td>
								<td>{user.first_name}</td>
								<td>{user.last_name}</td>
								<td>{user.city}</td>
								<td>{user.role}</td>
								<td>{user.status}</td>
								<td>{user.email}</td>
								<td>
									<div className="table-icon-group flex">
										<button onClick={(e) => e.preventDefault()}>
											<span
												className="icon icon-sm icon-edit edit-user-toggle"
												onClick={() => handleEditSlide(user.id)}
											></span>
										</button>
										<button>
											<span className="icon icon-sm icon-eye-hollow"></span>
										</button>
										<button onClick={(e) => e.preventDefault()}>
											<span
												className="icon icon-sm icon-trash open-delete-user"
												onClick={() => handleDeleteModal(user.id)}
											></span>
										</button>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
				{/* tbody end */}
			</table>
			{/* ==> Table End */}

			{/* Table Section End */}
		</div>
	);
};

export default Table;

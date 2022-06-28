import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Redirect,
	Navigate,
} from "react-router-dom";
import { AppProvider, useGlobalState } from "./context";
import ResetPassword from "./login/ResetPassword";
import Login from "./login/Login";
import Users from "./Users/Users";
import Developers from "./Developers/Developers";
import Clients from "./Clients/Clients";
import MyProfile from "./Profile/MyProfile";
import SideBar from "../components/SideBar";
import UserProfile from "./Profile/UserProfile";

function App() {
	const [isCheckLogedIn, setIsCheckLogedIn] = useState(false);

	return (
		<>
			<AppProvider>
				{!isCheckLogedIn && (
					<Router>
						<Routes>
							<Route path="/" element={<Navigate replace to="/login" />} />
							<Route path="/users" element={<Navigate replace to="/login" />} />
							<Route
								path="/developers"
								element={<Navigate replace to="/login" />}
							/>
							<Route
								path="/clients"
								element={<Navigate replace to="/login" />}
							/>
							<Route
								path="/my-profile"
								element={<Navigate replace to="/login" />}
							/>

							<Route
								path="/login"
								element={
									<Login
										isCheckLogedIn={isCheckLogedIn}
										setIsCheckLogedIn={setIsCheckLogedIn}
									/>
								}
							/>
							<Route path="/reset-password" element={<ResetPassword />} />
						</Routes>
					</Router>
				)}
				{isCheckLogedIn && (
					<Router>
						<div className="main-container-wrapper grid">
							<SideBar />
							<main className="main-container">
								<Routes>
									<Route path="/" element={<Navigate replace to="/users" />} />
									<Route path="/users" element={<Users />} />
									<Route path="/users/user" element={<UserProfile />} />
									<Route path="/developers" element={<Developers />} />
									<Route path="/clients" element={<Clients />} />
									<Route
										path="/my-profile"
										element={
											<MyProfile
												isCheckLogedIn={isCheckLogedIn}
												setIsCheckLogedIn={setIsCheckLogedIn}
											/>
										}
									/>
									<Route
										path="/login"
										element={<Navigate replace to="/users" />}
									/>
									<Route
										path="/reset-password"
										element={<Navigate replace to="/users" />}
									/>
								</Routes>
							</main>
						</div>
					</Router>
				)}
			</AppProvider>
		</>
	);
}

export default App;

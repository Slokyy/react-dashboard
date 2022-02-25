import "./App.css";
import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Redirect,
	Navigate,
} from "react-router-dom";
import { AppProvider } from "./context";
import ResetPassword from "./login/ResetPassword";
import Login from "./login/Login";
import Users from "./Users/Users";
import Developers from "./Developers/Developers";
import Clients from "./Clients/Clients";
import MyProfile from "./MyProfile/MyProfile";
import SideBar from "../components/SideBar";

function App() {
	return (
		<AppProvider>
			<Router>
				<div className="container grid">
					<SideBar />
					<main className="main-container">
						<Routes>
							<Route path="/" element={<Navigate replace to="/users" />} />
							<Route path="/users" element={<Users />} />
							<Route path="/developers" element={<Developers />} />
							<Route path="/clients" element={<Clients />} />
							<Route path="/my-profile" element={<MyProfile />} />
							<Route path="/login" element={<Login />} />
							<Route path="/reset-password" element={<ResetPassword />} />
						</Routes>
					</main>
				</div>
			</Router>
		</AppProvider>
	);
}

export default App;

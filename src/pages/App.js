import "./App.css";
import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Login from "./login/Login";
import Users from "./Users";
import { AppProvider } from "./context";
import ResetPassword from "./login/ResetPassword";

function App() {
	return (
		<AppProvider>
			<Router>
				<Routes>
					<Route path="/users" element={<Users />} />
					<Route path="/login" element={<Login />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Routes>
			</Router>
		</AppProvider>
	);
}

export default App;

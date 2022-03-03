import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, useGlobalState } from "../context";
import "./LoginReset.css";

const Login = () => {
	const [tempData, setTempData] = useState([]);
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(true);
	const { handleLocationPath, loggedUser, setLoggedUser } = useGlobalState();
	const navigate = useNavigate();

	useEffect(() => {
		fetch("http://localhost:8000/users")
			.then((res) => {
				if (!res.ok) {
					setIsLoading(false);
					throw Error("Ok: Bad response - ", res.status);
				}
				return res.json();
			})
			.then((data) => {
				setTempData(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log("Login Error Fetch: ", err);
				setIsLoading(false);
			});
	}, []);

	const handleLogin = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/users")
			.then((res) => {
				if (!res.ok) {
					setIsLoading(false);
					throw Error("Ok: Bad response - ", res.status);
				}
				return res.json();
			})
			.then((data) => {
				setTempData(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log("Login Error Fetch: ", err);
				setIsLoading(false);
			});
	};

	console.log(handleLocationPath());
	return (
		<>
			{loggedUser && navigate("/")}
			{!loggedUser && (
				<section className="login">
					<div className="container grid">
						<form className="login-form flex">
							<img
								src="./images/universal-logo-big.png"
								alt="Logo of universal studios thats above the login form"
							/>
							<div className="heading-group">
								<h1>Login</h1>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="login-email"
									id="login-email"
									required
								/>
								<label htmlFor="login-email" className="login-label-name">
									<span className="login-content-name">Email</span>
								</label>
							</div>
							<div className="form-group">
								<input type="password" name="password" id="password" required />
								<label htmlFor="password" className="login-label-name">
									<span className="login-content-name">Password</span>
								</label>
								<span className="icon icon-w-xsm icon-eye icon-eye-slash toggle-pwd"></span>
							</div>

							<div className="form-group">
								<input type="submit" value="Submit" />
							</div>
						</form>
					</div>
				</section>
			)}
		</>
	);
};

export default Login;

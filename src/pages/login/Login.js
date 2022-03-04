import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, useGlobalState } from "../context";
import "./LoginReset.css";

const Login = ({ isCheckLogedIn, setIsCheckLogedIn }) => {
	const [tempData, setTempData] = useState([]);
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});

	const [isLoading, setIsLoading] = useState(true);
	const { handleLocationPath, isLogedIn, setIsLogedIn, refetch, setRefetch } =
		useGlobalState();
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

	useEffect(() => {
		if (isLogedIn) {
			setIsCheckLogedIn(true);
		} else {
			setIsCheckLogedIn(false);
		}
	}, [isLogedIn]);

	const handleLogin = (e, form) => {
		e.preventDefault();
		// console.log(form);
		console.log(tempData);

		let luser = tempData.filter((tempItem) => {
			let result;

			if (
				tempItem.email === form.email.trim() &&
				tempItem.password === form.password.trim()
			) {
				result = tempItem;
			} else {
				console.log("No user by that email/password");
			}
			return result;
		});

		if (luser.length > 0) {
			localStorage.setItem(
				"user",
				JSON.stringify({
					id: luser[0].id,
					email: luser[0].email,
				})
			);
			setRefetch(!refetch);
			// console.log(luser[0].id);
			setIsLogedIn(true);
			console.log(isLogedIn);
		} else {
			setIsLogedIn(false);
			console.log(isLogedIn);

			console.log("We dont have a luser", luser.length);
		}
		/* fetch("http://localhost:8000/users")
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
			}); */
	};

	// console.log(handleLocationPath());

	return (
		<>
			<section className="login">
				<div className="container grid">
					<form
						className="login-form flex"
						onSubmit={(e) => handleLogin(e, loginForm)}
					>
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
								defaultValue={loginForm.email}
								onChange={(e) =>
									setLoginForm({ ...loginForm, email: e.target.value })
								}
								required
							/>
							<label htmlFor="login-email" className="login-label-name">
								<span className="login-content-name">Email</span>
							</label>
						</div>
						<div className="form-group">
							<input
								type="password"
								name="password"
								id="password"
								defaultValue={loginForm.password}
								onChange={(e) => {
									setLoginForm({ ...loginForm, password: e.target.value });
								}}
								required
							/>
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
		</>
	);
};

export default Login;

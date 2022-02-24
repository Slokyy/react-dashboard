import React from "react";
import { AppContext, useGlobalState } from "../context";
import "./LoginReset.css";

const Login = () => {
	const { handleLocationPath } = useGlobalState();
	console.log(handleLocationPath());
	return (
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
						<input type="text" name="login-email" id="login-email" required />
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
	);
};

export default Login;

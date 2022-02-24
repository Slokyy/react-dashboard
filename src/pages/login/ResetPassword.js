import React from "react";
import { AppContext, useGlobalState } from "../context";
import "./LoginReset.css";

const ResetPassword = () => {
	const { handleLocationPath } = useGlobalState();
	console.log(handleLocationPath());
	return (
		<div>
			<section className="login">
				<div className="container grid">
					<form className="login-form flex">
						<img
							src="./images/universal-logo-big.png"
							alt="Logo of universal studios thats above the login form"
						/>
						<div className="heading-group">
							<h1>Forgot Password</h1>
							<span className="heading-desc">
								Please choose a new password to finish login.
							</span>
						</div>
						<div className="form-group">
							<input
								type="password"
								name="login-password"
								id="login-password"
								required
							/>
							<label htmlFor="login-password" className="login-label-name">
								<span className="login-content-name">Enter New Password</span>
							</label>
							<span className="icon icon-w-xsm icon-eye icon-eye-slash toggle-pwd"></span>
						</div>
						<div className="form-group">
							<input
								type="password"
								name="password"
								id="repeat-password"
								required
							/>
							<label htmlFor="repeat-password" className="login-label-name">
								<span className="login-content-name">
									Confirm Your New Password
								</span>
							</label>
							<span className="icon icon-w-xsm icon-eye icon-eye-slash toggle-pwd"></span>
						</div>

						<div className="form-group">
							<input type="submit" value="Submit" />
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default ResetPassword;

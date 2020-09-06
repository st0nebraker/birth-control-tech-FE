import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

export interface LoginProps {
  username: string;
  setUsername: Function;
  loggedIn: boolean;
  setLoggedIn: Function;
}

const Login: React.SFC<LoginProps> = (props) => {
  const verifyUser = () => {
    props.setLoggedIn(!props.loggedIn);
  };

  const buttonsEnabled = props.username.trim() !== "";

  return (
    <section className="Main-User-View login-wrapper">
      <div className='app-icon'>[ Logo or App Icon ]</div>
      <form className="login-form">
				<label className='form-input'>
					Name:
          <input
            type="name"
            aria-label="name-input"
            className="login-input"
            placeholder="username"
            name="username"
						value={props.username}
						style={{ width: '60%' }}
            onChange={(event) => props.setUsername(event.target.value)}
            required
          />
				</label>

				<Link to="/">
					<button
						onClick={() => verifyUser()}
						className="submit-login-btn"
						aria-label="login-button"
						type="button"
						disabled={!buttonsEnabled}
					>
						LOGIN
					</button>
				</Link>
      </form>
    </section>
  );
};

export default Login;

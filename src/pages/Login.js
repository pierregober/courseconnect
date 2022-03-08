import { useState } from "react";
import * as props from "./template.js";
import { getState, updateState } from "../utilities/scripts/state";

export default function Login() {
  document.title = "Login";

  const [loggedOn, setLoggedOn] = useState(getState().user.login);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const firstName = event.target.firstName;
    const lastName = event.target.lastName;
    const email = event.target.email;
    const password = event.target.password;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const registerUser = (event) => {
    inputs.login = true;
    updateState({ key: "user", user: inputs });
    console.log(getState);
  };

  const [showLogin, setShowLogin] = useState(true);

  if (!loggedOn) {
    return (
      <>
        {showLogin ? (
          <div>
            <div>Login</div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <div>Login</div>
            <div onClick={() => setShowLogin(false)}>Register</div>
          </div>
        ) : (
          <div>
            <div>Register</div>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <label for="passwordCheck">Re-enter Password</label>
            <input type="password" id="passwordCheck" name="passwordCheck" />
            <div onClick={() => registerUser()}>Register</div>
            <div onClick={() => setShowLogin(true)}>Login</div>
          </div>
        )}
        <div>{props.Footer()}</div>
      </>
    );
  } else {
    return <div>You're already logged in!</div>;
  }
}

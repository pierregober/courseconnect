import { useState } from "react";
import { getState, updateState } from "../utilities/scripts/state";
import { sendMessage } from "../utilities/scripts/api/messenger";

export default function Login() {
  document.title = "Login";

  const [loggedOn, setLoggedOn] = useState(getState().user.login);
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordPass, setPasswordPass] = useState(false);
  const checkPassword = (event) => {
    if (password !== "") setPasswordPass(password !== event.target.value);
  };

  const createUserObj = () => {
    return {
      firstName: firstName,
      lastName: lastName,
      email: email,
      login: false,
    };
  };

  const loginUser = (event) => {
    //Send information to database
    //Needs to be changed to the user object returned
    sendMessage({ type: "getUser", user: createUserObj() });
    console.log(getState());
  };

  const registerUser = (event) => {
    //Send information to database
    sendMessage({ type: "createUser", user: createUserObj() });
    console.log(getState());
  };

  const [showLogin, setShowLogin] = useState(true);

  if (!loggedOn) {
    return (
      <>
        {showLogin ? (
          <div className="Login">
            <div>Login</div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <div className="Button" onClick={(event) => loginUser()}>
                Submit
              </div>
              <div className="Button" onClick={(event) => setShowLogin(false)}>
                Register
              </div>
            </div>
          </div>
        ) : (
          <div className="Login">
            <div>Register</div>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={(event) => setFN(event.target.value)}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={(event) => setLN(event.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <label>Re-enter Password</label>
              <input
                type="password"
                name="passwordCheck"
                onChange={(event) => checkPassword(event)}
              />
            </div>
            {passwordPass && <div>Passwords do not match</div>}
            <div>
              <div className="Button" onClick={(event) => registerUser()}>
                Submit
              </div>
              <div className="Button" onClick={(event) => setShowLogin(true)}>
                Login
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return <div>You're already logged in!</div>;
  }
}

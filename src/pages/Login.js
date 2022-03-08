import { useState } from "react";
import { getState, updateState } from "../utilities/scripts/state";

export default function Login() {
  document.title = "Login";

  const [loggedOn, setLoggedOn] = useState(getState().user.login);
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordPass, setPasswordPass] = useState();
  const checkPassword = (event) => {
    setPasswordPass(password !== event.target.checkPassword);
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
    let returnUser = createUserObj();
    returnUser.login = true;

    updateState({ key: "user", user: returnUser });
    console.log(getState());
  };

  const registerUser = (event) => {
    //Send information to database
    let newUser = createUserObj();
    newUser.login = true;
    updateState({ key: "user", user: newUser });
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
              <input type="email" name="email" onChange={setEmail} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" onChange={setPassword} />
            </div>
            <div>
              <div onClick={() => loginUser()}>Login</div>
              <div onClick={() => setShowLogin(false)}>Register</div>
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
                value={firstName || ""}
                onChange={setFN}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName || ""}
                onChange={setLN}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email || ""}
                onChange={setEmail}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password || ""}
                onChange={setPassword}
              />
            </div>
            <div>
              <label>Re-enter Password</label>
              <input
                type="password"
                name="passwordCheck"
                onChange={checkPassword}
              />
            </div>
            {!passwordPass && <div>Passwords do not match</div>}
            <div>
              <div onClick={() => registerUser()}>Register</div>
              <div onClick={() => setShowLogin(true)}>Login</div>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return <div>You're already logged in!</div>;
  }
}

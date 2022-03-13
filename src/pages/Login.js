import { useState, useEffect } from "react";
import { getState, updateState } from "../utilities/scripts/state";
import sendMessage from "../utilities/scripts/api/messenger";
import { cleanStrings } from "../utilities/scripts/utilities";

export default function Login() {
  document.title = "Login";

  const [loggedOn, setLoggedOn] = useState(getState().user.login);

  const validate = (props) => {
    switch (props.key) {
      case "FN":
        setFN(cleanStrings(props.value));
        break;
      case "LN":
        setLN(cleanStrings(props.value));
        break;
      case "email":
        setEmail(cleanStrings(props.value));
        break;
      case "password":
        setPassword(cleanStrings(props.value));
        break;
      default:
        break;
    }
  };

  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordPass, setPasswordPass] = useState(false);
  const checkPassword = (event) => {
    if (password !== "") setPasswordPass(password === event.target.value);
  };

  const createUserObj = () => {
    return {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      login: false,
    };
  };

  const loginUser = (event) => {
    sendMessage({ type: "getUser", user: createUserObj() });
    setLoggedOn(true);
  };

  const registerUser = (event) => {
    if (passwordPass) {
      sendMessage({ type: "createUser", user: createUserObj() });
    } else {
      alert("Password failed to be replicated");
    }
    setLoggedOn(true);
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
                value={email || ""}
                maxLength={30}
                onChange={(event) =>
                  validate({ key: "email", value: event.target.value })
                }
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password || ""}
                maxLength={20}
                onChange={(event) =>
                  validate({ key: "password", value: event.target.value })
                }
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
                value={firstName || ""}
                maxLength={20}
                onChange={(event) =>
                  validate({ key: "FN", value: event.target.value })
                }
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName || ""}
                maxLength={20}
                onChange={(event) =>
                  validate({ key: "LN", value: event.target.value })
                }
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email || ""}
                maxLength={30}
                onChange={(event) =>
                  validate({ key: "email", value: event.target.value })
                }
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password || ""}
                maxLength={20}
                onChange={(event) =>
                  validate({ key: "password", value: event.target.value })
                }
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
            {!passwordPass && <div>Passwords do not match</div>}
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

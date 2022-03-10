import { getState, updateState } from "../utilities/scripts/state";
import { sendMessage } from "../utilities/scripts/api/messenger";
import { useState } from "react";

export default function User() {
  document.title = "Profile";

  const cleanStrings = (props) => {
    if (props) {
      return props.replace(/[^a-zA-Z0-9!@#$%^&*()]/g, "");
    } else {
      return "";
    }
  };

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
  const [firstName, setFN] = useState(getState().user.firstName || "");
  const [lastName, setLN] = useState(getState().user.lastName || "");
  const [email, setEmail] = useState(getState().user.email || "");
  const [password, setPassword] = useState(getState().user.password || "");

  const createUserObj = () => {
    return {
      firstName: firstName,
      lastName: lastName,
      email: email,
      login: false,
    };
  };

  const updateUser = (event) => {
    // updateUser(createUserObj());
    updateState({ key: "user", user: createUser() });
  };

  return (
    <div className="Login">
      <div>Profile</div>
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
        <div className="Button" onClick={(event) => updateUser()}>
          Update
        </div>
      </div>
    </div>
  );
}

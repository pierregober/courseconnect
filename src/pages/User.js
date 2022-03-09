import { getState, updateState } from "../utilities/scripts/state";
import { sendMessage } from "../utilities/scripts/api/messenger";
import { useState } from "react";

export default function User() {
  document.title = "Profile";
  const [firstName, setFN] = useState(getState().user.firstName || "");
  const [lastName, setLN] = useState(getState().user.lastName || "");
  const [email, setEmail] = useState(getState().user.email || "");

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
          value={firstName}
          maxLength={20}
          onChange={(event) => setFN(event.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          maxLength={20}
          onChange={(event) => setLN(event.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          maxLength={30}
          onChange={(event) => setEmail(event.target.value)}
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

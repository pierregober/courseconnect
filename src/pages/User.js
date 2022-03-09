import { getState, updateState } from "../utilities/scripts/state";
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
    //Send information to database
    let newUser = createUserObj();
    newUser.login = true;
    updateState({ key: "user", user: newUser });
    console.log(getState());
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
          onChange={(event) => setFN(event.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => setLN(event.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <div onClick={(event) => updateUser()}>Update</div>
      </div>
    </div>
  );
}

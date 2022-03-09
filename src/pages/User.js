import { getState, updateState } from "../utilities/scripts/state";
import { useState } from "react";

export default function User() {
  document.title = "Profile";
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <div onClick={(event) => updateUser()}>Update</div>
      </div>
    </div>
  );
}

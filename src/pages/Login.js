import * as props from "./template.js";

export default function Login() {
  document.title = "Login";
  return (
    <div>
      <div>Login</div>
      <div>
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
      </div>
      {props.Footer()}
    </div>
  );
}

import * as props from "./template.js";

export default function Login() {
  document.title = "Login";
  return (
    <div>
      <div>Login</div>
      <div>
        To celebrate our new year, we added in new classes. Be sure to check our
        catalogue and ensure you apply while seats last!
      </div>
      {props.Footer()}
    </div>
  );
}

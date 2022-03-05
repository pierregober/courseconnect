import * as props from "./template.js";

let menuList = [];
menuList.push(props.generateMenu("Welcome.js", "Welcome"));
menuList.push(props.generateMenu("Login.js", "Login"));
menuList.push(props.generateMenu("Search.js", "Search"));
menuList.push(props.generateMenu("Schedule.js", "Schedule"));

export default function Welcome() {
  return (
    <div>
      {props.Banner("fillBanner.jpg")}
      {props.Menu(menuList)}
      {props.Body()}
      {props.Footer()}
    </div>
  );
}

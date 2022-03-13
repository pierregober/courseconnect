import { createUser, getUser, updateUser } from "./user.js";

export default function sendMessage(props) {
  if (!props) throw new Error("Send Message Props' empty");
  switch (props.type) {
    case "createUser":
      createUser(props.user);
      break;
    case "getUser":
      getUser(props.user);
      break;
    case "updateUser":
      updateUser(props.user);
      break;
    case "getClass":
      break;
    case "getClasses":
      break;
    case "updateClass":
      break;
    case "getSeats":
      break;
    case "updateSeats":
      break;
    default:
      throw new Error("Send Message Props' lacks a type");
  }
}

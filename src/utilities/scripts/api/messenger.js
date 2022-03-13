import { createUser, getUser, updateUser } from "./user";
import { getClass, createClass, updateClass } from "./class";
import { getSeats, createSeats, updateSeats } from "./seats";

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
    case "createClass":
      createClass(props.class);
      break;
    case "getClass":
      getClass(props.class);
      break;
    case "getClasses":
      getClass(props);
      break;
    case "updateClass":
      updateClass(props.class);
      break;
    case "createSeats":
      createSeats(props.seats);
      break;
    case "getSeats":
      getSeats(props.seats);
      break;
    case "updateSeats":
      updateSeats(props.seats);
      break;
    default:
      throw new Error("Send Message Props' lacks a type");
  }
}

import { createUser, getUser, updateUser } from "./user";
import { getClass, getClasses, createClass, updateClass } from "./class";
import { getSeats, createSeats, updateSeats } from "./seats";

const sendMessage = async (props) => {
  if (!props) throw new Error("Send Message Props' empty");
  switch (props.type) {
    case "createUser":
      await createUser(props.user);
      break;
    case "getUser":
      await getUser(props.user);
      break;
    case "updateUser":
      await updateUser(props.user);
      break;
    case "createClass":
      await createClass(props.class);
      break;
    case "getClass":
      await getClass(props.class);
      break;
    case "getClasses":
      await getClasses();
      break;
    case "updateClass":
      await updateClass(props.class);
      break;
    case "createSeats":
      await createSeats(props.seats);
      break;
    case "getSeats":
      await getSeats(props.seats);
      break;
    case "updateSeats":
      await updateSeats(props.seats);
      break;
    default:
      throw new Error("Send Message Props' lacks a type");
  }
};

export default sendMessage;

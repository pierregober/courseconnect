function sendMessage(props) {
  if (!props) throw new Error("Send Message Props' empty");
  switch (props.type) {
    case "getUser":
      break;
    case "updateUser":
      break;
    case "getClass":
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

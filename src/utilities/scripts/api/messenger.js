function sendMessage(props) {
  if (!props) throw new Error("Send Message Props' empty");
  switch (props.type) {
    case "getUser":
      axios.get("/user/" + props.user.id).then((res) => console.log(res));
      break;
    case "updateUser":
      axios.patch("/user/" + props.user.id).then((res) => console.log(res));
      break;
    case "getClass":
      axios.get("/class/" + props.class.id).then((res) => console.log(res));
      break;
    case "getClasses":
      axios.get("/classes").then((res) => console.log(res));
      break;
    case "updateClass":
      axios.patch("/class/" + props.class.id).then((res) => console.log(res));
      break;
    case "getSeats":
      axios.get("/seats/" + props.seats.id).then((res) => console.log(res));
      break;
    case "updateSeats":
      axios.get("/seats/" + props.seats.id).then((res) => console.log(res));
      break;
    default:
      throw new Error("Send Message Props' lacks a type");
  }
}

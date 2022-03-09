const urlbase = "https://8bx5031sr8.execute-api.us-west-2.amazonaws.com/prod/";
import { getState, updateState } from "../state";
export function sendMessage(props) {
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

function createUser(props) {
  fetch(urlbase + "/user/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  }).then((response) => {
    if (!response.user) {
      console.log(response.error);
      alert("Failed to create user");
    }
    props.id = response.id;
    updateState({ key: "user", user: props });
  });
}

// //Initial version
// function loginUser(props) {
//   fetch(urlbase + "/user/", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(props),
//   }).then((response) => {
//     if (response.user) {
//       updateState({ key: "user", user: response.user });
//     } else {
//       alert("Failed to login", response.error);
//     }
//   });
// }

function getUser(props) {
  fetch(urlbase + "/users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  }).then((response) => {
    let successLogin = false;
    if (!response.users) alert("Login Failed", response.error);
    response.users.foreach((user) => {
      successLogin =
        user.email === props.user.email &&
        user.password === props.user.password;

      if (successLogin) {
        user.login = true;
        updateState(user);
        return;
      }
    });
    if (!successLogin) alert("Login Failed");
  });
}

function updateUser(props) {
  fetch(urlbase + "/user/", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  }).then((response) => {
    if (!response.user) {
      console.log(response.error);
      alert("Failed to update");
    }
    updateState({ key: "user", user: response.user });
  });
}

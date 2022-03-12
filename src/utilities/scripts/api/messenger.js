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
  fetch(urlbase + "users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  })
    .then((response) => response.json())
    .then((data) => {
      props.id = data.id;
      updateState({ key: "user", user: props });
    })
    .catch((error) => console.log(error));
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
  fetch(urlbase + "users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let successLogin = false;
      if (!data) alert("Login Failed");
      data.forEach((user) => {
        // successLogin =
        //   user.email === props.email && user.password === props.password;
        if (!successLogin) {
          successLogin = user.email === props.email;
          if (successLogin) {
            console.log("hit", user);
            user.login = true;
            updateState({ key: "user", user: user });
          }
        }
      });
      if (!successLogin) alert("Login Failed");
    })
    .catch((error) => console.log(error));
}

function updateUser(props) {
  fetch(urlbase + "users", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data) alert("Failed to update");
      updateState({ key: "user", user: response.user });
    })
    .catch((error) => console.log(error));
}

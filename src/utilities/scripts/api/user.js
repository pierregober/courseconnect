import { urlbase } from "../utilities";
import { getState, updateState } from "../state";

const createUser = (props) => {
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
};

const getUser = (props) => {
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
        if (!successLogin) {
          successLogin =
            user.email === props.email && user.password === props.password;
          if (successLogin) {
            user.login = true;
            updateState({ key: "user", user: user });
          }
        }
      });
      if (!successLogin) alert("Login Failed");
    })
    .catch((error) => console.log(error));
};

const updateUser = (props) => {
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
};

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

export { getUser, createUser, updateUser };

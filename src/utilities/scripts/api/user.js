import { urlbase } from "../utilities";
import { getState, updateState } from "../state";

const createUser = async (props) => {
  try {
    const response = fetch(urlbase + "users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    const data = await response.json();
    props.id = data.id;
    props.login = true;
    updateState({ key: "user", user: props });
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (props) => {
  try {
    const response = await fetch(urlbase + "users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
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
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (props) => {
  try {
    const response = await fetch(urlbase + "users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    const data = await response.json();
    if (!data) alert("Update Failed");
    updateState({ key: "user", user: props });
  } catch (error) {
    console.log(error);
  }
};

export { getUser, createUser, updateUser };

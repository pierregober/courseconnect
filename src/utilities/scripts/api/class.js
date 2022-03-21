import { urlbase } from "../utilities";
import { getState, updateState } from "../state";

const createClass = (props) => {
  fetch(urlbase + "classes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

const getClass = (props) => {
  fetch(urlbase + "classes/" + props.id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      updateState({ key: "class", class: data });
    })
    .catch((error) => console.log(error));
};

const getClasses = async (props) => {
  try {
    const response = await fetch(urlbase + "classes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    updateState({ key: "classes", classes: data });
  } catch (error) {
    console.log(error);
  }
};

const updateClass = (props) => {
  fetch(urlbase + "classes", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

export { getClass, getClasses, createClass, updateClass };

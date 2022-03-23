import { urlbase } from "../utilities";
import { getState, updateState } from "../state";

const createClass = async (props) => {
  try {
    const response = await fetch(urlbase + "classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
  } catch (error) {
    console.log(error);
  }
};

const getClass = async (props) => {
  try {
    const response = await fetch(urlbase + "classes/" + props.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    updateState({ key: "class", class: data });
  } catch (error) {
    console.log(error);
  }
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

const updateClass = async (props) => {
  try {
    const response = await fetch(urlbase + "classes", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

export { createClass, getClass, getClasses, updateClass };

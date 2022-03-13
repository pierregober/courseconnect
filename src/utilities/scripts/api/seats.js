import { urlbase } from "../utilities";
import { getState, updateState } from "../state";

const createSeats = (props) => {
  fetch(urlbase + "seats", {
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

const getSeats = (props) => {
  fetch(urlbase + "seats", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

const updateSeats = (props) => {
  fetch(urlbase + "seats", {
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
export { getSeats, createSeats, updateSeats };

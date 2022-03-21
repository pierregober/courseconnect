import { urlbase } from "../utilities";
import { getState, updateState } from "../state";

const createSeats = async (props) => {
  console.log(props);
  try {
    const response = await fetch(urlbase + "seats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    const data = await response.json();
    if (!data) alert("Error Occured");
  } catch (error) {
    console.log(error);
  }
};

const getSeats = async (props) => {
  try {
    const response = await fetch(urlbase + "seats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    let found = false;
    data.forEach((seat) => {
      if (!found) {
        found = seat.classId === props.id;
        if (found) updateState({ key: "seats", seats: seat });
      }
    });
    if (!found) alert("Failed to find seats");
  } catch (error) {
    console.log(error);
  }
};

const updateSeats = async (props) => {
  try {
    const response = await fetch(urlbase + "seats", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    const data = await response.json();
    if (!data) alert("Error Occured");
  } catch (error) {
    console.log(error);
  }
};
export { getSeats, createSeats, updateSeats };

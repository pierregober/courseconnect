import { urlbase } from "../utilities";
import { getState, updateState } from "../state";

const userSchedule = async (props) => {
  try {
    const response = await fetch(urlbase + "users", {
      method: "PUT",
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

const seatsTaken = async (props) => {
  try {
    const response = await fetch(urlbase + "seats", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props),
    });
    const data = await response.json();
    if (!data) alert("Error Occured");
  } catch (error) {
    console.log(error);
  }
};

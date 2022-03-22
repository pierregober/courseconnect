import sendMessage from "../api/messenger";
import { generateKey } from "../utilities";
import { useEffect, useState } from "react";
// import Seats from "../../../modals/seats";
import ReactModal from "react-modal";
import { getState, updateState } from "../state";

export default function Row(props) {
  const [open, setOpen] = useState(false);
  const [seat, setSeat] = useState({});
  const register = (props) => {
    sendMessage({ type: "getSeats", class: props }).then(() => {
      setOpen(true);
      setSeat(getState().seats);
    });
  };
  const update = () => {
    let seat = getState().seats;
    let user = getState().user;
    seat.seatsTaken++;
    console.log(user);
    user.schedule.push(seat.classId);
    getState().seats = seat;
    getState().user = user;
    sendMessage({ type: "updateSeats", seat: seat });
    sendMessage({ type: "updateUser", user: user });
    setOpen(false);
  };
  useEffect(() => {}, [open, seat]);

  if (props) {
    if (props.name && props.professor && props.content && props.dateOffer) {
      return (
        <>
          <div className="ClassTable">
            <div>{props.name.toString() || "None"}</div>
            <div>{props.professor.toString() || "None"}</div>
            <div>{props.content.toString() || "None"}</div>
            <div>{props.dateOffer.toString() || "None"}</div>
            <div>
              <button onClick={() => register(props)}>Register</button>
            </div>
          </div>
          <ReactModal isOpen={open} className={"Modal"}>
            <div>
              <div>Availability</div>
            </div>
            <div>
              <label htmlFor="seatsTotal">Total Seats</label>
              <div id="seatsTotal">{seat.totalSeats || ""}</div>
            </div>
            <div>
              <label htmlFor="seatsOpen">Seats Open</label>
              <div id="seatsOpen">
                {seat.totalSeats - seat.seatsTaken || ""}
              </div>
            </div>
            <div>
              <button onClick={() => update()}>Register</button>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </ReactModal>
        </>
      );
    }
    return <></>;
  }
  return <></>;
}

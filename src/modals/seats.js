import { useState, useEffect } from "react";
import ReactModal from "react-modal";

export default function Seats(props) {
  return (
    <ReactModal>
      <div className="Modal">
        <div>
          <div>Availability</div>
        </div>
        <div>
          <label htmlFor="seatsTotal">Total Seats</label>
          <div id="seatsTotal">{props.totalSeats}</div>
        </div>
        <div>
          <label htmlFor="seatsOpen">Seats Open</label>
          <div id="seatsOpen">{props.totalSeats - props.seatsTaken}</div>
        </div>
        <div>
          <button>Register</button>
        </div>
      </div>
    </ReactModal>
  );
}

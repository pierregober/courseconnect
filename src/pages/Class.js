import Row from "../utilities/scripts/table/row";
import { getState, updateState } from "../utilities/scripts/state";
import sendMessage from "../utilities/scripts/api/messenger";
import { useEffect, useState } from "react";

export default function Class() {
  document.title = "Class";

  useEffect(() => {
    sendMessage({ type: "getClasses", class: {} });
  }, []);

  return (
    <div>
      <div>Class</div>
      <div>
        To celebrate our new year, we added in new classes. Be sure to check our
        catalogue and ensure you apply while seats last!
      </div>
      <div className="ClassTable">
        <div>Name</div>
        <div>Professor</div>
        <div>Seats</div>
        <div>Checked</div>
        <div>Date</div>
        <div></div>
      </div>
      <Row />
    </div>
  );
}

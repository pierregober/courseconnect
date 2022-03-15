import Row from "../utilities/scripts/table/row";
import { getState, updateState } from "../utilities/scripts/state";
import sendMessage from "../utilities/scripts/api/messenger";
import { useEffect, useState } from "react";

export default function Schedule() {
  document.title = "Schedule";
  const [classes, setClasses] = useState(getState().classes);
  useEffect(() => {
    sendMessage({ type: "getClasses" });
  }, [classes]);

  return (
    <div>
      <div>Schedule</div>
      <div>
        To celebrate our new year, we added in new classes. Be sure to check our
        catalogue and ensure you apply while seats last!
      </div>
      <div className="ClassTable">
        <div>Name</div>
        <div>Professor</div>
        <div>Content</div>
        <div>Date</div>
        <div></div>
      </div>
      {classes.map((c) => <Row {...c} />)}
    </div>
  );
}

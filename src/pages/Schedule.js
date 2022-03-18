import Row from "../utilities/scripts/table/row";
import { getState, updateState } from "../utilities/scripts/state";
import sendMessage from "../utilities/scripts/api/messenger";
import { useEffect, useState } from "react";
import { generateKey } from "../utilities/scripts/utilities";

export default function Schedule() {
  document.title = "Schedule";
  const [classes, setClasses] = useState(getState().classes);

  if (classes.length === 0)
    sendMessage({ type: "getClasses" }).then(() =>
      setClasses(getState().classes)
    );

  useEffect(() => {
    console.log();
  });

  return (
    <div>
      <div>Our Offerings</div>
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
      {classes.map((c) => (
        <Row key={generateKey()} {...c} />
      ))}
    </div>
  );
}

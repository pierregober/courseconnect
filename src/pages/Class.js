import Row from "../utilities/scripts/table/row";
import { getState, updateState } from "../utilities/scripts/state";
import sendMessage from "../utilities/scripts/api/messenger";
import { useEffect, useState } from "react";

export default function Class() {
  document.title = "Class";
  const [classes, setClasses] = useState([]);
  const user = getState().user;
  useEffect(() => {}, []);

  let message = false;

  if (user.classes !== null && user.classes)
    message = user.classes.length !== 0;

  if (message) {
    user.classes.forEach((obj) => {
      sendMessage({ type: "getClass", props: obj })
        .then((data) => classes.push(data))
        .catch((error) => console.log(error));
    });
    return (
      <div>
        <div>Your Classes</div>
        <div className="ClassTable">
          <div>Name</div>
          <div>Professor</div>
          <div>Seats</div>
          <div>Checked</div>
          <div>Date</div>
          <div></div>
        </div>
        {classes.map((c) => (
          <Row key={generateKey()} {...c} />
        ))}
      </div>
    );
  } else {
    return <div>Please register for some classes!</div>;
  }
}

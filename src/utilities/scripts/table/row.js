import sendMessage from "../api/messenger";
import { generateKey } from "../utilities";

export default function Row(props) {
  if (props) {
    if (props.name && props.professor && props.content && props.dateOffer) {
      return (
        <div className="ClassTable">
          <div>{props.name.toString() || "None"}</div>
          <div>{props.professor.toString() || "None"}</div>
          <div>{props.content.toString() || "None"}</div>
          <div>{props.dateOffer.toString() || "None"}</div>
          <div>
            <button
              onClick={() => sendMessage({ type: "getClass", class: props })}
            >
              submit
            </button>
          </div>
        </div>
      );
    }
    return <></>;
  }
  return <></>;
}

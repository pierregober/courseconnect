import sendMessage from "../api/messenger";
import { generateKey } from "../utilities";

export default function Row(props) {
  if (props) {
    if (props.name && props.professor && props.content && props.dateOffer) {
      return (
        <div key={generateKey()} className="ClassTable">
          <div key={generateKey()}>{props.name.toString() || "None"}</div>
          <div key={generateKey()}>{props.professor.toString() || "None"}</div>
          <div key={generateKey()}>{props.content.toString() || "None"}</div>
          <div key={generateKey()}>{props.dateOffer.toString() || "None"}</div>
          <div key={generateKey()}>
            <button
              onClick={() => sendMessage({ type: "getClasses", class: {} })}
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

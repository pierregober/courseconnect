import sendMessage from "../api/messenger";
import { generateKey } from "../utilities";

export default function Row(props) {
  console.log(props, props.name, props.professor, props.content, props.date);
  return (
    <div key={generateKey()} className="ClassTable">
      <div>{props.name.toString() || "None"}</div>
      <div>{props.professor.toString() || "None"}</div>
      <div>{props.content.toString() || "None"}</div>
      <div>{props.date.toString() || "None"}</div>
      <div>
        <button onClick={() => sendMessage({ type: "getClasses", class: {} })}>
          submit
        </button>
      </div>
    </div>
  );
}

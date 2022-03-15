import sendMessage from "../api/messenger";
import { generateKey } from "../utilities";

export default function Row(props) {
  console.log(props);
  console.log(props["name"]);
  return (
    <div key={generateKey()} className="ClassTable">
      // <div>{props.props.name}</div>
      // <div>{props.props.professor}</div>
      // <div>{props.props.content}</div>
      // <div>{props.props.date}</div>
      <div>
        <button onClick={() => sendMessage({ type: "getClasses", class: {} })}>
          submit
        </button>
      </div>
    </div>
  );
}

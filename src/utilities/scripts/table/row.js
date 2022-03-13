import sendMessage from "../api/messenger";

export default function Row(props) {
  return (
    <div className="ClassTable">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>
        <button onClick={() => sendMessage({ type: "getClass", class: {} })}>
          submit
        </button>
      </div>
    </div>
  );
}

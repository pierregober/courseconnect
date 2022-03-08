import * as props from "./template.js";

export default function Schedule() {
  document.title = "Schedule";
  return (
    <div>
      <div>Schedule</div>
      <div>
        To celebrate our new year, we added in new classes. Be sure to check our
        catalogue and ensure you apply while seats last!
      </div>
      {props.Footer()}
    </div>
  );
}

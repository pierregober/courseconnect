import * as props from "./template.js";

export default function Error() {
  document.title = "Error";
  return (
    <div>
      <div>Something Happened!</div>
      <div>
        We appologise.  Please try reloading the page.
      </div>
      {props.Footer()}
    </div>
  );
}

import Row from "../utilities/scripts/table/row";

export default function Schedule() {
  document.title = "Schedule";
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
        <div>Seats</div>
        <div>Checked</div>
        <div>Date</div>
        <div></div>
      </div>
      <Row />
    </div>
  );
}

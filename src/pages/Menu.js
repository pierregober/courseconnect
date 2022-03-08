import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Menu(props) {
  return (
    <>
      <div className="Banner"></div>
      <nav>
        <div className="Menu">
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/class">Class</Link>
          <Link to="/schedule">Schedule</Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

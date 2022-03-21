import { Outlet, Link } from "react-router-dom";
import { getState, updateState } from "../utilities/scripts/state";
import { useEffect, useState } from "react";

export default function Menu(props) {
  return (
    <>
      <nav>
        <div className="Menu">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/class">Class</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
      <div className="Logo"></div>

      <Outlet />
    </>
  );
}

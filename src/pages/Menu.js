import { Outlet, Link } from "react-router-dom";
import { getState, updateState } from "../utilities/scripts/state";
import { useEffect, useState } from "react";

export default function Menu(props) {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(getState().user);

  useEffect(() => {
    if (user) {
      setLogin(getState().user.login || false);
    }
  }, [user, login]);
  return (
    <>
      <nav>
        <div className="Menu">
          <Link to="/">Home</Link>
          {!login ? <Link to="/login">Login</Link> : <></>}
          {login ? <Link to="/class">Class</Link> : <></>}
          {login ? <Link to="/schedule">Schedule</Link> : <></>}
          {login ? <Link to="/profile">Profile</Link> : <></>}
        </div>
      </nav>
      <div className="Logo"></div>

      <Outlet />
    </>
  );
}

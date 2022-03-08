import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Class from "./pages/Class";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Schedule from "./pages/Schedule";
import Welcome from "./pages/Welcome";
import reportWebVitals from "./reportWebVitals";
import "./utilities/design/css/base.css";
import "./utilities/design/css/login.css";
import "./utilities/design/css/menu.css";
import "./utilities/scripts/state.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index title="Welcome" element={<Welcome />} />
          <Route path="/class" title="Class" element={<Class />} />
          <Route path="*" title="Error" element={<Error />} />
          <Route path="/login" title="Login" element={<Login />} />
          <Route path="/schedule" title="Schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

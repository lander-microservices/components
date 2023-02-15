import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";

import "./index.css";

const App = () => (
  <div className="container">
    <Header eventID={""} number="" />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

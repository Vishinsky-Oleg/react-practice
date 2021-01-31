import "../scss/style.scss";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import Form from "./Components/Form";
import Lift from "./Components/Lift";
import Calculator from "./Components/Lift";
import Composition from "./Components/Composition";

// ReactDOM.render(<App />, document.querySelector("#root"));
ReactDOM.render(<Composition />, document.querySelector("#root"));

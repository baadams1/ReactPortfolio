import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./component/homePage/HomePage";
import DetailPage from "./component/detailPage/DetailPage";

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HomePage />, document.getElementById("root"));
ReactDOM.render(<DetailPage />, document.getElementById("part2"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

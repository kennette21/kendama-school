import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Kenflip from "./Kenflip";
import GridPlayground from "./GridPlayground";
import TrickGraphTesting from "./TrickGraphTesting";

ReactDOM.render(
	<React.StrictMode>
		{false ? <Kenflip /> : <TrickGraphTesting />}
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PetProvider } from "./PetContext";
import App from "./App";

ReactDOM.render(
	<BrowserRouter>
		<PetProvider>
			<App />
		</PetProvider>
	</BrowserRouter>,
	document.getElementById("root")
);

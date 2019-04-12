import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import AdoptionPage from "./AdoptionPage";
import "./App.css";
import PetContext from "./PetContext";

class App extends Component {
	static contextType = PetContext;
	render() {
		return (
			<div className="App">
				<header>Pet Adoption Central</header>
				<main className="main">
					<Switch className="application">
						<Route exact path="/" component={LandingPage} />
						<Route path="/adopt" component={AdoptionPage} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;

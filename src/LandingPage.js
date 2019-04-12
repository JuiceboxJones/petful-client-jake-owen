import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
	render() {
		return (
			<section className="landing-page">
				<section className="mission-statement" />
				<Link to="/adopt">Adopt</Link>
			</section>
		);
	}
}

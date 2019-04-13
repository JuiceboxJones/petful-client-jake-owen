import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
	render() {
		return (
			<div className="landing-page">
				<section className="statement">
					{"Helping pets find new loving homes."}
				</section>
				<section className="statement">
					{
						"By pressing adopt below, you can adopt the pet that is currently MOST in need of a new home.  For us, this means the one that has been here the longest.  Please prepare to make room in your heart."
					}
				</section>
				<Link to="/adopt">Adopt</Link>
			</div>
		);
	}
}

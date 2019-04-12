import React, { Component } from "react";
import PetContext from "./PetContext";
import PetService from "./PetService";

export default class AdoptionPage extends Component {
	static contextType = PetContext;

	componentDidMount() {
		// this.context.clearError();
		PetService.getCats()
			.then(this.context.setCats)
			.catch(this.context.setError);
		PetService.getDogs()
			.then(this.context.setDogs)
			.catch(this.context.setError);
		PetService.getUsers()
			.then(this.context.setUsers)
			.catch(this.context.setError);
	}

	renderPets() {
		const { cats = null, dogs = null, users = null } = this.context;

		return !cats || !dogs || !users ? (
			<section className="petlist">
				<span className="status-text">{"Loading from server..."}</span>
			</section>
		) : (
			<section className="adoptable-pets">
				<section className="cats">{"// display from cats queue"}</section>
				<section className="dogs">{"//display dogs queue"}</section>
			</section>
		);
	}

	render() {
		const { error } = this.context;
		return (
			<section className="Pets">
				{error ? (
					<p className="red">There was an error, try again</p>
				) : (
					this.renderPets()
				)}
			</section>
		);
	}
}

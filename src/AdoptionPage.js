import React, { Component } from "react";
import PetContext from "./PetContext";
import PetService from "./PetService";
import Pet from "./Pet";

export default class AdoptionPage extends Component {
	static contextType = PetContext;

	componentDidMount() {
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

	handleAdoptCat() {
		PetService.adoptCat().then(this.context.dequeueCat);
		if (this.context.cats[0].adopter) {
			this.handleAdoptCat();
		}
	}

	handleAdoptDog() {
		return null;
	}

	renderPets() {
		const { cats = null, dogs = null, users = null } = this.context;

		return !cats || !dogs || !users ? (
			<section className="petlist">
				<span className="status-text">{"Loading from server..."}</span>
			</section>
		) : (
			<section className="adoptable-pets">
				<button className="adopt" onClick={this.handleAdoptCat}>
					Adopt
				</button>
				<ul className="cats">
					{cats.map(cat => (
						<Pet pet={cat} />
					))}
				</ul>
				<button className="adopt" onClick={this.handleAdoptDog}>
					Adopt
				</button>
				<ul className="dogs">
					{dogs.map(dog => (
						<Pet pet={dog} />
					))}
				</ul>
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

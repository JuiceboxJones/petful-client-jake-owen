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

	handleAdoptCat(e) {
    PetService.adoptCat().then(this.context.setCats);
		// if (this.context.cats[0].adopter) {
		// 	this.handleAdoptCat();
		// }
	}

	handleAdoptDog(e) {
		PetService.adoptDog().then(this.context.setDogs);
		// if (this.context.dogs[0].adopter) {
    //   console.log('dequeue')
		// 	this.handleAdoptDog(e);
		// }
	}

	renderPets() {
		const { cats = [], dogs = [], users = null } = this.context;

		return !cats || !dogs || !users ? (
			<section className="petlist">
				<span className="status-text">{"Loading from server..."}</span>
			</section>
		) : (
			<section className="adoptable-pets">
				
				<ul className="cats">
        <button className="adopt" onClick={(e) => this.handleAdoptCat(e)}>
					Adopt a Cat
				</button>
					{cats.map(cat => (
						<Pet pet={cat} />
					))}
				</ul>

				<ul className="dogs">
        <button className="adopt" onClick={(e) => this.handleAdoptDog(e)}>
					Adopt a Dog
				</button>
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

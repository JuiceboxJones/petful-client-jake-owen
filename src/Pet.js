import React, { Component } from "react";

export default class Pet extends Component {
	render() {
    const { pet } = this.props;

		return (
			<li className="pet">
				<img src={pet.imageURL} alt={pet.imageDescription} />
				<section className="name">Name: {pet.name}</section>
				<section className="sex">Gender: {pet.sex}</section>
				<section className="breed">Breed: {pet.breed}</section>
				<section className="story">My story: {pet.story}</section>
				<section className="age">Age: {pet.age}</section>
				<section className="adopter">{pet.adopter}</section>
			</li>
		);
	}
}

import React, { Component } from "react";

export default class Pet extends Component {
	render() {
		const { pet } = this.props;
		return (
			<li className="pet">
				<img src={pet.imageURL} alt={pet.imageDescription} />
				<section className="name">{pet.name}</section>
				<section className="sex">{pet.sex}</section>
				<section className="breed">{pet.breed}</section>
				<section className="story">{pet.story}</section>
				<section className="age">{pet.age}</section>
			</li>
		);
	}
}

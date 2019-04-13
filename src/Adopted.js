import React, { Component } from "react";

export default class Adopted extends Component {

	render() {
    const { pet, user } = this.props;
    const randomize =() => {
      if(!user){
        return;
      }
      let username = user[Math.floor(Math.random()*user.length)].name
      console.log(username)
      return username;
    }
		return !pet ? (
			<section className="pet-item">
				<span className="status-text">{''}</span>
			</section>
		) : (
			<li className="pet">
				<img src={pet.imageURL} alt={pet.imageDescription} />
				<section className="name">Name: {pet.name}</section>
				<section className="sex">Gender: {pet.sex}</section>
				<section className="breed">Breed: {pet.breed}</section>
				<section className="story">My story: {pet.story}</section>
				<section className="age">Age: {pet.age}</section>
				<section className="adopter">Adopted by: {randomize()}</section>
			</li>
		);
	}
}

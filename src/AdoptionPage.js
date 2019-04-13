import React, { Component } from "react";
import PetContext from "./PetContext";
import PetService from "./PetService";
import Pet from "./Pet";
import Adopted from './Adopted'

export default class AdoptionPage extends Component {
  static contextType = PetContext;
  state = {
    adoptedCat: null,
    adoptedDog: null,
  }

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
  
  setAdoptedCat(cat){
    if(!cat){
      return;
    }
    this.setState({ 
      adoptedCat: cat
     });
  };
  setAdoptedDog(dog){
    if(!dog){
      return;
    }
    this.setState({ adoptedDog: dog });
	};

	handleAdoptCat(e) {
    this.setAdoptedCat(this.context.cats[0])
    PetService.adoptCat().then(this.context.setCats);
		// if (this.context.cats[0].adopter) {
		// 	this.handleAdoptCat();
		// }
	}

	handleAdoptDog(e) {
    this.setAdoptedDog(this.context.dogs[0])
		PetService.adoptDog().then(this.context.setDogs);
		// if (this.context.dogs[0].adopter) {
    //   console.log('dequeue')
		// 	this.handleAdoptDog(e);
		// }
	}

	renderPets() {
    const { cats = [], dogs = [], users = null } = this.context;
    const { adoptedDog = [], adoptedCat = [] } = this.state;

		return !cats || !dogs || !users ? (
			<section className="petlist">
				<span className="status-text">{"Loading from server..."}</span>
			</section>
		) : (
      <section className='display-container'>
			<section className="adoptable-pets">
      <h2>Up For Adoption</h2>
				<ul className="cats">
        <button className="adopt" onClick={(e) => this.handleAdoptCat(e)}>
					Adopt a Cat
				</button>
					{/* {cats.map(cat => (
            ))} */}
						<Pet pet={cats[0]} />
				</ul>

				<ul className="dogs">
        <button className="adopt" onClick={(e) => this.handleAdoptDog(e)}>
					Adopt a Dog
				</button>
					{/* {dogs.map(dog => (
            ))} */}
						<Pet pet={dogs[0]} />
				</ul>
        </section>
        <section className='adopted'>
        <h2>Adopted Pets</h2>
        <Adopted pet={adoptedDog} user={users} />
        
        <Adopted pet={adoptedCat} user={users} />
      </section>
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

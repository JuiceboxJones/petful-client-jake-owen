import React, { Component } from "react";

const PetContext = React.createContext({
	cats: [],
	dogs: [],
	users: [],
	setCats: () => {},
	setDogs: () => {},
	setUsers: () => {},
	dequeueCat: () => {},
	dequeueDog: () => {},
	dequeueUser: () => {}
});
export default PetContext;

export class PetProvider extends Component {
	state = {
		cats: null,
		dogs: null,
		users: null,
		error: null
	};
	setCats = cats => {
		this.setState({ cats });
	};
	setDogs = dogs => {
		this.setState({ dogs });
	};
	setUsers = users => {
		this.setState({ users });
	};
	dequeueCat = () => {
		let cats = [...this.state.cats];
		cats.splice(0, 1);
		this.setState({ cats });
	};
	dequeueDog = () => {
		let dogs = [...this.state.dogs];
		dogs.splice(0, 1);
		this.setState({ dogs });
	};
	dequeueUser = () => {
		let users = [...this.state.users];
		users.splice(0, 1);
		this.setState({ users });
	};
	render() {
		const value = {
			cats: this.state.cats,
			dogs: this.state.dogs,
			users: this.state.users,
			setCats: this.setCats,
			setDogs: this.setDogs,
			setUsers: this.setUsers,
			dequeueCat: this.dequeueCat,
			dequeueDog: this.dequeueDog,
			dequeueUser: this.dequeueUser
		};
		return (
			<PetContext.Provider value={value}>
				{this.props.children}
			</PetContext.Provider>
		);
	}
}

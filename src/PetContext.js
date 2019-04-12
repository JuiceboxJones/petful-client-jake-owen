import React, { Component } from "react";

const PetContext = React.createContext({
	cats: [],
	dogs: [],
	users: [],
	setCats: () => {},
	setDogs: () => {},
	setUsers: () => {}
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
	render() {
		const value = {
			cats: this.state.cats,
			dogs: this.state.dogs,
			users: this.state.users,
			setCats: this.setCats,
			setDogs: this.setDogs,
			setUsers: this.setUsers
		};
		return (
			<PetContext.Provider value={value}>
				{this.props.children}
			</PetContext.Provider>
		);
	}
}

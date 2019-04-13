import config from "./config";

const PetService = {
	getCats() {
		return fetch(`${config.API_ENDPOINT}/cat`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	adoptCat() {
		return fetch(`${config.API_ENDPOINT}/cat`, {
			method: "DELETE"
		}).then(this.getCats)
	},
	getDogs() {
		return fetch(`${config.API_ENDPOINT}/dog`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	adoptDog() {
		return fetch(`${config.API_ENDPOINT}/dog`, {
			method: "DELETE"
		}).then(this.getDogs)
	},
	getUsers() {
		return fetch(`${config.API_ENDPOINT}/user`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default PetService;

import config from "./config";

const PetService = {
	getCats() {
		return fetch(`${config.API_ENDPOINT}/cat`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	getDogs() {
		return fetch(`${config.API_ENDPOINT}/dog`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	getUsers() {
		return fetch(`${config.API_ENDPOINT}/user`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default PetService;

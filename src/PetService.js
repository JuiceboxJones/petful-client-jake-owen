import config from "./config";

const PetService = {
	getCats() {
		return fetch(`${config.API_ENDPOINT}/cats`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	getDogs() {
		return fetch(`${config.API_ENDPOINT}/dogs`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	getUsers() {
		return fetch(`${config.API_ENDPOINT}/users`).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default PetService;
import axios from 'axios';

const MAIN_URL = 'https://api.mocki.io/v1/';

const fullPath = (path) => `${MAIN_URL}${path}`;

const fetchApi = (path, data = {}, method = 'get') => {
	return axios({
		method,
		url: fullPath(path),
	})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
};

export default fetchApi;

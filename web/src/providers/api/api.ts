import Axios from "axios";
import qs from "querystring";

Axios.defaults.baseURL = "http://localhost:3500/api";
Axios.defaults.withCredentials = true;

export const post = (path: string, data: object = {}) =>
	Axios.post(path, data)
		.then(({ data }) => data)
		.catch((e) => {
			throw e.response.data;
		});

export const get = (path: string, data: object = {}) =>
	Axios.get(`${path}/?${qs.stringify(data as any)}`, data)
		.then(({ data }) => data)
		.catch((e) => {
			throw e.response.data;
		});

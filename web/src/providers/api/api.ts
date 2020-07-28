import Axios from "axios";
import qs from "querystring";

export const baseUrl = "http://localhost:3500";

Axios.defaults.baseURL = baseUrl + "/api";
Axios.defaults.withCredentials = true;
Axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
	"accessToken"
)}`;

export const post = (
	path: string,
	data: object = {},
	multipart: boolean = false
) =>
	Axios.post(
		path,
		data,
		multipart ? { headers: { "content-type": "multipart/form-data" } } : {}
	)
		.then(({ data }) => data)
		.catch((e) => {
			throw e.response.data;
		});

export const put = (
	path: string,
	data: object = {},
	multipart: boolean = false
) =>
	Axios.put(
		path,
		data,
		multipart ? { headers: { "content-type": "multipart/form-data" } } : {}
	)
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

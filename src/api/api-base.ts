import axios, { AxiosError, type AxiosResponse } from "axios";

const BASE_URL = "http://94.198.218.177:8000/";

axios.defaults.baseURL = BASE_URL;

const instance = axios.create({
	baseURL: BASE_URL,
});

const checkSuccess = (response: AxiosResponse) => {
	return response.status === 200 ? response.data : Promise.reject(response.data);
};

const handleErrors = (e: AxiosError) => {
	if (e.response) {
		throw e.response?.data;
	} else {
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		throw "Unknown error";
	}
};

export const get = <ResponseType>(endpoint: string): Promise<ResponseType> => {
	return instance
		.get<ResponseType>(`${endpoint}`, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then(checkSuccess)
		.catch(handleErrors);
};
export const post = <ResponseType>(endpoint: string): Promise<ResponseType> => {
	return instance
		.post<ResponseType>(`${endpoint}`, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then(checkSuccess)
		.catch(handleErrors);
};

export default instance;

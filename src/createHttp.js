import HttpClient from './HttpClient';

export default (apiUrl, token = null, onPromiseResolved, onUnauthorized = () => {}) => {
	const http = new HttpClient({ apiUrl, token, onPromiseResolved, onUnauthorized });
	return {
		getUnauthenticated: path => http.getUnauthenticated(path),
		get: path => http.get(path),
		del: path => http.del(path),
		post: (path, data) => http.post(path, data),
		put: (path, data) => http.put(path, data),
	};
};

import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
});

api.interceptors.request.use(config => {
	const token = localStorage.token;

	return {
		...config,
		headers: { ...config.headers, Authorization: `Bearer ${token}` },
	};
});

export default api;

import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VITE_APP_API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.token;

    return {
        ...config,
        headers: { ...config.headers, Authorization: `Bearer ${token}` },
    };
});

export default api;

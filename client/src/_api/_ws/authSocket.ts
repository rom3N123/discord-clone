import io from 'socket.io-client';

export const authSocket = (nameSpace: string = '') => {
	const token = localStorage.token;

	return io(`${import.meta.env.VITE_APP_API_URL}${nameSpace}`, {
		extraHeaders: {
			token,
		},
	});
};

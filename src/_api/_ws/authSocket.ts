import io from 'socket.io-client';

export const authSocket = (nameSpace = '') => {
    const token = localStorage.token;

    return io(`${process.env.APP_API_URL}${nameSpace}`, {
        extraHeaders: {
            token,
        },
    });
};

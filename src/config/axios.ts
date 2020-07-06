import axios from 'axios';
import store from '../redux/configureStore';
import { apiKey, baseUrl } from './apiContsants';

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
    async config => {
        const state = store.getState();
        const token = (state.auth && state.auth.token && state.auth.token.token) ? state.auth.token.token : await localStorage.getItem("@token");
        config.headers.VERSION = 1;
        config.headers.APIKEY = apiKey;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default axiosInstance;

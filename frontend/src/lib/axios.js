import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
let getClerkToken = null;

export const setClerkTokenGetter = (tokenGetter) => {
    getClerkToken = tokenGetter;
};

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
});

axiosInstance.interceptors.request.use(async (config) => {
    if (getClerkToken) {
        const token = await getClerkToken();

        if (token) {
            config.headers = config.headers ?? {};
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});

export default axiosInstance;

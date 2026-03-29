import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL?.trim();

if (!API_BASE_URL) {
    const message =
        "Missing VITE_API_URL. Set frontend/.env VITE_API_URL to your backend API base URL before starting the app.";
    console.error(message);
    throw new Error(message);
}

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

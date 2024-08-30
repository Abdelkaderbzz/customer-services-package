
import axios from 'axios';


const baseURL = import.meta.env.VITE_APP_BASE_URL as string;
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL,
  headers,
});

axiosInstance.interceptors.request.use(
  (config:any) => {
    const  service_interaction_token  = window.localStorage.getItem(
      'service_interaction_token'
    );
    if (service_interaction_token) {
      config.headers['Authorization'] = `Bearer ${service_interaction_token}`;
    }
    return config;
  },
  (error:any) => {
    Promise.reject(error);
  }
);

export default axiosInstance;

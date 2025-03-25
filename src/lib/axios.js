import axios from 'axios'

export const axiosInstace = axios.create({
    baseURL: "https://walaaback-production-7c7e.up.railway.app/api",
    withCredentials: true
});

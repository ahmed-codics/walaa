import axios from 'axios'

export const axiosInstace = axios.create({
    baseURL: "https://walaaback-production.up.railway.app/api",
    withCredentials: true
});

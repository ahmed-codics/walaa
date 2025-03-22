import axios from 'axios'

export const axiosInstace = axios.create({
    baseURL: "https://walaaback-production.up.railway.app/api",
<<<<<<< HEAD
    withCredentials : true
})
=======
    withCredentials: true
});
>>>>>>> f2ec7f3 (Fixed API base URL and CORS issues)

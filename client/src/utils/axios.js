import axios from "axios";

const instance = axios.create({
    baseURL: "https://happiness-services-backend.onrender.com",
    withCredentials: true,
});

export default instance;

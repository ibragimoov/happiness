import axios from "axios";

const instance = axios.create({
    baseURL: "https://happiness-services-backend.onrender.com",
    // baseURL: "http://localhost:5000",
    withCredentials: true,
});

export default instance;

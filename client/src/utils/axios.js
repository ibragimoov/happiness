import axios from "axios";

const instance = axios.create({
    baseURL: "https://happiness-backend-app.herokuapp.com/",
});

export default instance;

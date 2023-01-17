import axios from "axios";

const api = axios.create({
    baseURL:"http://SEU_ENDERECO"
})

export default api;
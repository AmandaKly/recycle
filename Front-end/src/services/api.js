import axios from "axios";

const api = axios.create({
    baseURL:'http://127.0.0.1:3333/api/',
    headers: {
        'Content-Type' : 'application/json',
        'Acess-Control-Allow-Origin': '*',
    },
    withCredentials:true
});


  

export default api;
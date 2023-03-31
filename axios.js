import axios from "axios";
const myAxios = axios.create({
    baseURL : 'https://todoapp-api-i1zw.onrender.com/',
    headers: {
        'Content-Type': 'application/json',
      },

}); 

export default myAxios;
import axios from 'axios';

const api = axios.create({

 baseURL: 'http://localhost:5000/api',

});


 

// Automatically attach token to each request if user is logged in

api.interceptors.request.use(config => {

 const user = JSON.parse(localStorage.getItem('user'));

 if (user?.token) {

   config.headers.Authorization = `Bearer ${user.token}`;

 }

 return config;

}, error => Promise.reject(error));


 

export default api;
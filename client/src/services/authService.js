import api from './api';


 

// Updated to include role in login request

export const loginUser = async (email, password, role) => {

 const { data } = await api.post('/auth/login', { email, password, role });

 return data;

};


 

// Registration remains the same (role included in user object)

export const registerUser = async (user) => {

 const { data } = await api.post('/auth/register', user);

 return data;

};
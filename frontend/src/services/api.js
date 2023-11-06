import axios from 'axios';

const ape = axios.create({ 
    baseURL: "http://localhost:3333"
 })

export const api = axios.create({
  baseURL: "http://localhost:3333"
})

 export const createSession = async(email, password) => {
   return api.post('/sessions', { email, password })
 }

 export const getUsers = async() =>{
  return api.get('/account');
 }

export default ape;

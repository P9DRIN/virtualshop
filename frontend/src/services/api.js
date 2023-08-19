import axios from 'axios';

const api = axios.create({ 
    baseURL: "http://localhost:3333"
 })

 const createSession = async(email, password) => {
   return api.post('/sessions', { email, password })
 }

 export { 
   api,
   createSession
  } 

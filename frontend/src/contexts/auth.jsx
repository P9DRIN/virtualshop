import { createContext, useEffect, useState } from 'react';
import api from "../services/api";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [usuario, setUsuario] = useState();

    useEffect(() => {
        api.get("account").then(({ data }) => {
            setUser(data.user)
        })  
    }, []);
    
    
    localStorage.setItem('account', JSON.stringify(user))
    
        
    const signup = (email, password) =>{
        const usersStorage = JSON.parse(localStorage.getItem('account'))
        const hasUser = usersStorage?.filter((user) => user.email === email);
        
        if(hasUser?.length){
            return "Already registred"
        }
        let newUser;
        if (usersStorage){
            newUser =[...usersStorage, { email, password }];
        } else{
            newUser = [{ email, password }]
        }
        return;
    }
    const signin = (email, password) =>{
        const usersStorage = JSON.parse(localStorage.getItem('account'))
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if(hasUser?.length){
            if (hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(10).substring(2);
                localStorage.setItem('user_token', JSON.stringify({ email, token }))
                setUser({ email, password });
                return;
            } else {
                return 'Wrong e-mail or password'
            } 
        }else{
            return 'User not registred yet'
        } 
   }


    const signout = () =>{
        setUser(null);
        localStorage.removeItem('user_token')
    }

    return (
        <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    )
}
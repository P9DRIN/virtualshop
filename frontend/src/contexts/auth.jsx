import { createContext, useEffect, useState } from 'react';
import { api, createSession } from '../services/api'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [account, setAccount] = useState([]);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false)

     }, [])
    
    function handleLogin(e){
       e.preventDefault()
       Login(email, password)
    }

    const Login = async (email, password) => {
        
        const response = await createSession(email, password);

        const loggedUser = response.data.user;
        const token = response.data.token;
        
        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('token', token);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        navigate('/')
        

       
    

    }
    const Logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        
        setUser(null);

        navigate('/login')
        
    }

    function handleSignup(e){
        e.preventDefault()
        

            let newUser;
            newUser = { email, password };
            api.post("account", newUser).then(console.log("usuario cadastrado com sucesso"))
            setError('Usuário cadastrado com sucesso...!')
       
    
        
    }

    return (
        <AuthContext.Provider value = {{ handleLogin, Authenticated: !!user, loading, user, Login, Logout, handleSignup, email, setEmail, password, setPassword, setError, error }}>
            {children}
        </AuthContext.Provider>
    )
}
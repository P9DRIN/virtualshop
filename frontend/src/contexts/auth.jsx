import { createContext, useEffect, useState } from 'react';
import { api, createSession, } from '../services/api'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [account, setAccount] = useState([]);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [street, setStreet] = useState('');
    const [housenumber, setHouseNumber] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [name, setName] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if(recoveredUser && token){
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setLoading(false)

     }, [])
    

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
    
    const Register = (email, password, street, housenumber, zipcode, name) => {

        const newUser = { email, password, name, street, housenumber, zipcode }
        api.post('account', newUser)
        console.log('ok')
        
    }

    function handleLogin(e){
        e.preventDefault()
        Login(email, password)
    }
    
    function handleSignup(e){
        e.preventDefault()
        Register(email, password, name, street, housenumber, zipcode)

    }


    const Logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        
        setUser(null);

        navigate('/login')
        
    }

    return (
        <AuthContext.Provider value = {{ handleLogin, Authenticated: !!user, loading, Login, user, Logout, handleSignup, setEmail, email, setPassword, setError, error, setStreet, setHouseNumber, setZipcode, setName }}>
            {children}
        </AuthContext.Provider>
    )
}
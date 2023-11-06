import { createContext, useEffect, useState } from 'react';
import { api, createSession } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

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
    
    const Register = (email, password, name, street, housenumber, zipcode) => {
        const newUser = { email, password, name, street, housenumber, zipcode }
        api.post('/accounts', newUser)
    }

    function handleLogin(e){
        e.preventDefault()
        Login(email, password)
    }
    
    function handleSignup(e){
        e.preventDefault()
        Register(email, password, name, street, housenumber, zipcode)
        navigate('/login')

    }

    const Logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('cart');
        api.defaults.headers.Authorization = null;
        setUser(null);

        navigate('/login')
    }

    const UpdateUser = async(id, email, street, housenumber, zipcode ) => {
        await api.put(`/account/${id} `, {email, street, housenumber, zipcode})
        updateAccount();
    }

    const updateAccount =  async () => {
        const tkn = localStorage.getItem('token');
        const accountUser =  localStorage.getItem('user');
        let acc =  JSON.parse(accountUser)

        await fetch('http://localhost:3333/accounts').then((res) => res.json())
        .then((data) => {
            const rawDataToCookedData = data.account
            let selectedAccount = rawDataToCookedData.find(currentAcc => currentAcc._id == acc._id )
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setUser(selectedAccount)
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', tkn);
        })
        
        

    } 

    return (
        <AuthContext.Provider value = {{ handleLogin, Authenticated: !!user, loading, Login, user, Logout, handleSignup, setEmail, email, setPassword, setError, error, setStreet, setHouseNumber, setZipcode, setName, UpdateUser, updateAccount }}>
            {children}
        </AuthContext.Provider>
    )
}
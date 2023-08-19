import { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Layout from '../Pages/Layout';
import ErrorPage from './error'
import SigninPage from '../Pages/Signin'
import SignupPage from '../Pages/Signup';
import CartPage from '../Pages/Cart';
import AccountPage from '../Pages/Account';

import { AuthContext, AuthProvider } from '../contexts/auth';


const Private = ({ children }) => {
    const { Authenticated, loading } = useContext(AuthContext);

    if(loading) {
        return <div className='loading'>Carregando...</div>
    }

    if(!Authenticated){
        return <Navigate to='/login'/>
    }
    return children;
}


const RoutesApp = () => {
    return(
            <Fragment>
                <Routes>

                    <Route path='*' element={<ErrorPage/>}/>                    
                    <Route exact path='/' element={<Layout/>} />
                    
                    <Route exact path='/login' element={<SigninPage/>}/>
                    <Route exact path='/register' element={<SignupPage/>}/>
                    <Route exact path='/cart' element={<Private><CartPage/></Private>}/>
                    <Route exact path='/profile' element={<Private><AccountPage/></Private>}/>

                </Routes>
            </Fragment>
    )
}

export default RoutesApp;
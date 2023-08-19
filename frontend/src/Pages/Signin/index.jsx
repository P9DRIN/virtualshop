import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Form } from './style.js';
import { AuthContext } from "../../contexts/auth";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";
import Footer from '../../components/Footer';

const SigninPage = () => {    
    
    const {
        Authenticated, 
        Login,
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        error,
    } = useContext(AuthContext)

    function emailHandler(e){
        setEmail(e.target.value)
    }
    function passwordHandler(e){
        setPassword(e.target.value)
    }

    return(
        <>
            <Header/>
            <Layout>
                <Form>
                    <input type='text' placeholder="E-mail" onChange={emailHandler}/>
                    <input type="password" placeholder='Password' onChange={passwordHandler}/>
                    <button onClick={handleLogin}>LOGIN</button>
                <i>Dont have an account?<Link to='/register'> Sign up!</Link></i>
                <i>{error}</i>
                </Form>

            </Layout>
            <Footer/>
        </>
    )
}

export default SigninPage;